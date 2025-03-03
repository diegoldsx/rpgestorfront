import { fields } from "../config/announcementFields";

export const facetedFilters = fields.filter(({ options }) => !!options);
