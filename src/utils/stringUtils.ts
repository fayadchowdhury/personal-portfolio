export const splitByDashAndCapitalize = function (text: string) : string {
    const splits = text.split("-");
    const capitalizedSplits = splits.map((split) => split.charAt(0).toUpperCase() + split.slice(1));
    return capitalizedSplits.join(" ");
}