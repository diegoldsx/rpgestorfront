import { fields } from "../config/fields";

export const facetedFilters = fields.filter(({ options }) => !!options);
