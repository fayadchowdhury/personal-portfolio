import removeMarkdown from "remove-markdown";
import { marked } from "marked";

const removeFeaturedImgTag = function (html: string) : string {
  const doc = new DOMParser().parseFromString(html, "text/html");

  doc.querySelectorAll("img").forEach(img => {
    const src = img.getAttribute("src");

    if (src === "./assets/featured-image.png") {
      img.remove();
    }
  });

  return doc.body.innerHTML;
}

const markdownToHtmlString = function (md: string) : string {
  const htmlString = marked.parse(md, {
  "async": false,
  "breaks": false,
  "extensions": null,
  "gfm": true,
  "hooks": null,
  "pedantic": false,
  "silent": false,
  "tokenizer": null,
  "walkTokens": null
  });
  return removeFeaturedImgTag(htmlString);
}

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

export function readmeToHtml(readme: string) {
  return markdownToHtmlString(readme);
}