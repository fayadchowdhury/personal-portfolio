import removeMarkdown from "remove-markdown";
import { parse } from "marked";

const markdownToHtmlString = async function (md: string) : Promise<string> {
  return await parse(md);
}

const markdownToPlainTextString = function (md: string) : string {
  return removeMarkdown(md, {
    stripListLeaders: true,
    listUnicodeChar: "",
    gfm: true,
    useImgAltText: false
  });
}

export function readmeToPlainText(readme: string) {
  return markdownToPlainTextString(readme);
}

export function parseReadme(md: string): string {
  if (!md) return "";
  return removeMarkdown(md, {
    stripListLeaders: true,
    listUnicodeChar: "",
    gfm: true,
    useImgAltText: true
  });
}