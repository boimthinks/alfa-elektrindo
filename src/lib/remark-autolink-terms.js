import { categories, manufacturers, skipList } from './autolink-terms.js';

const rawTerms = [...categories, ...manufacturers];
const termsMap = new Map();

for (const t of rawTerms) {
  const lower = t.name.trim().toLowerCase();
  if (skipList.includes(lower)) continue;
  if (!termsMap.has(lower)) {
    termsMap.set(lower, { name: t.name.trim(), slug: t.slug });
  }
}

const sortedTerms = [...termsMap.values()].sort((a, b) => b.name.length - a.name.length);

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const SKIP_PARENT_TYPES = new Set(['heading', 'link', 'code', 'inlineCode', 'html']);

export function remarkAutolinkTerms() {
  return (tree) => {
    const linkedTerms = new Set();

    const walk = (nodes, ancestors) => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.children) {
          walk(node.children, [...ancestors, node]);
          continue;
        }
        if (node.type !== 'text') continue;
        if (ancestors.some((anc) => SKIP_PARENT_TYPES.has(anc.type))) continue;

        let remaining = node.value || '';
        if (!remaining || remaining.trim().length === 0) continue;

        const pieces = [];
        while (remaining.length > 0) {
          let best = null;
          for (const term of sortedTerms) {
            const lower = term.name.toLowerCase();
            if (linkedTerms.has(lower)) continue;
            const regex = new RegExp(`(?<![a-zA-Z0-9])${escapeRegExp(term.name)}(?![a-zA-Z0-9])`, 'i');
            const match = regex.exec(remaining);
            if (!match) continue;
            if (
              !best ||
              match.index < best.index ||
              (match.index === best.index && term.name.length > best.term.name.length)
            ) {
              best = { term, index: match.index, length: match[0].length, text: match[0] };
            }
          }

          if (!best) break;

          linkedTerms.add(best.term.name.toLowerCase());

          if (best.index > 0) {
            pieces.push({ type: 'text', value: remaining.slice(0, best.index) });
          }
          pieces.push({
            type: 'link',
            url: best.term.slug,
            children: [{ type: 'text', value: best.text }],
          });
          remaining = remaining.slice(best.index + best.length);
        }

        if (pieces.length === 0) continue;

        if (remaining.length > 0) pieces.push({ type: 'text', value: remaining });

        nodes.splice(i, 1, ...pieces);
        i += pieces.length - 1;
      }
    };

    walk(tree.children || [], []);
  };
}