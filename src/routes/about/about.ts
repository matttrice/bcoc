import { parseMarkdown } from "$lib/markdown";
import aboutMd from "$lib/content/about.md?raw";

export const aboutHtml = await parseMarkdown(aboutMd);