import removeMarkdown from "remove-markdown";
import { marked } from "marked";

// const markdownToHtmlString = async function (md: string) : Promise<string> {
//   return await marked.parse(md);
// }

const markdownToPlainTextString = function (md: string) : string {
  return removeMarkdown(md, {
    stripListLeaders: true,
    listUnicodeChar: "",
    gfm: true,
    useImgAltText: false
  });
}

export const extractTldr = function (readme: string): string[] {
  const tokens = marked.lexer(readme);
  const features: string[] = [];
  let insideFeaturesSection: boolean = false;

  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 3) {
      insideFeaturesSection = token.text.toLowerCase() === "tl;dr";
    } else if (insideFeaturesSection && token.type === "list") {
      for (const item of token.items) {
        features.push(item.raw);
      }
      break;
    }
  }
  return features;
}

export function readmeToPlainText(readme: string) {
  return markdownToPlainTextString(readme);
}