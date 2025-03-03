import { fields } from "../config/templateFields";

export const facetedFilters = fields.filter(({ options }) => !!options);
