"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./components/columns";
import { facetedFilters, visibilityState } from "./components/columnSchema";
import { fakeReturns } from "@/types/Return";

export const moduleLabels = {
	detailsUrl: "return/details-page",
	title: "Return",
	route: "/return",
	new: "Registrar Return",
	edit: "Editar Return",
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
					data={fakeReturns}
					columns={columns}
					facetedFilters={facetedFilters}
					visibilityState={visibilityState}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
