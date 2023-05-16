import { _ } from "lodash";

export function getSlug(result) {
  return _.kebabCase(result.properties.Name.title[0].text.content).replace(
    /[^\x00-\x7F]/g,
    ""
  );
}
