"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable, FacetedFilter } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./schemas/columnSchema";
import { FAKE_CONTENT } from "./types/data";
import { columns } from "./components/columns";
import { Content } from "./types";
import { useFetch } from "@/hooks/useFetch";

const Page = () => {
	const { data, loading, error } = useFetch<Content[]>("/api/content");

	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title="Conteúdos"
					breadcrumbs={{
						title: "Conteúdos",
						href: "/contents",
					}}
					actions={{
						secondary: {
							text: "Registrar conteúdo",
							href: "contents/details",
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable
					data={data || []}
					columns={columns}
					facetedFilters={getFieldsWithOptions() as FacetedFilter[]}
					visibilityState={getVisibilityState()}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
