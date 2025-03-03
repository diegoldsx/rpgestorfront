import { fields } from "../config/emailFields";

export const facetedFilters = fields.filter(({ options }) => !!options);
