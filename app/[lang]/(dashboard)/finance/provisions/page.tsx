"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./components/columns";
import { fakeProvisions as fakeData } from "@/types/Provision";
import { facetedFilters, visibilityState } from "./components/columnSchema";

export const moduleLabels = {
	detailsUrl: "provisions/details-page",
	title: "Provisão",
	route: "/provisions",
	new: "Registrar provisão",
	edit: "Editar provisão",
};

const Page = () => {
	// const { data, loading, error } =
	// 	useFetch<CustomerSchemaType[]>("/api/customer");

	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title={moduleLabels.title}
					breadcrumbs={{
						title: moduleLabels.title,
						href: moduleLabels.route,
					}}
					actions={{
						secondary: {
							text: moduleLabels.new,
							href: moduleLabels.detailsUrl,
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable
					data={fakeData}
					columns={columns}
					facetedFilters={facetedFilters}
					visibilityState={visibilityState}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
