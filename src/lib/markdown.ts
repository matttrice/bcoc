import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,        // single newlines → <br>
});

export async function parseMarkdown(md: string): Promise<string> {
  return marked.parse(md);   // ← important: use .parse() in v17
}