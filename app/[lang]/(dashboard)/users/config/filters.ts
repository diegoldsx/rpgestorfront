import { fields } from "./fields";

export const facetedFilters = fields.filter(({ options }) => !!options);
