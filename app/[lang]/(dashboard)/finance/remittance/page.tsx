"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";

import { columns } from "./components/columns";
import { facetedFilters, visibilityState } from "./components/columnSchema";
import { fakeRemittance } from "@/types/Remittance";


export const moduleLabels = {
	detailsUrl: "remittance/details-page",
	title: "Remessa",
	route: "/remittance",
	new: "Registrar Remessa",
	edit: "Editar Remessa",
}


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
					data={fakeRemittance}
					columns={columns}

					facetedFilters={facetedFilters}
					visibilityState={visibilityState}
					columnResizeMode="onChange"
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
