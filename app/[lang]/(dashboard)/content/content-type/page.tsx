"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable, FacetedFilter } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./schemas/columnSchema";
import { FAKE_CONTENT_TYPE } from "./types/data";
import { columns } from "./components/columns";

const Page = () => {
	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title="Conteúdo"
					breadcrumbs={{
						title: "Conteúdo",
						href: "/content",
					}}
					actions={{
						secondary: {
							text: "Registrar conteúdo",
							href: "content/details",
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable
					data={FAKE_CONTENT_TYPE}
					columns={columns}
					facetedFilters={getFieldsWithOptions() as FacetedFilter[]}
					visibilityState={getVisibilityState()}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
