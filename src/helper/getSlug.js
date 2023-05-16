import kebabCase from "lodash/kebabCase";

export function getSlug(result) {
  return kebabCase(result.properties.Name.title[0].text.content).replace(
    /[^\x00-\x7F]/g,
    ""
  );
}
