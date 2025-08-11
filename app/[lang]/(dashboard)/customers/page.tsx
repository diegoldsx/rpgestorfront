"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./components/columnSchema";
import { columns } from "./components/columns";
import { fakeCustomers } from "@/types/Customer";

export const moduleLabels = {
	detailsUrl: "customers/details-page",
	title: "Clientes",
	route: "/customers",
	new: "Registrar cliente",
	edit: "Editar cliente",
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
					data={fakeCustomers || []}
					columns={columns}
					facetedFilters={getFieldsWithOptions()}
					visibilityState={getVisibilityState()}
					columnResizeMode="onChange"
					meta={{ endpoint: "/customers" }}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
