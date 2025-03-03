import { fields } from "../config/groupsField";

export const facetedFilters = fields.filter(({ options }) => !!options);
