import { FacetedFilter } from "@/components/common/data-table/data-table";
import { fields } from "../config/fields";

export const facetedFilters = fields.filter(({ options }) => !!options) as FacetedFilter[];
