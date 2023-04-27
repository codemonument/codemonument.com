import { generatePostcssHandler, prefillCssCache } from "fresh-openprops";

export const handler = await generatePostcssHandler();

await prefillCssCache();
