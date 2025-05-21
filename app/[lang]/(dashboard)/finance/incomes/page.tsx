"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import {

	getFieldsWithOptions,
	visibilityState,
} from "./components/columnSchema";
import { columns } from "./components/columns";
import { fakeIncomes } from "@/types/Income";


export const moduleLabels = {
	detailsUrl: "incomes/details-page",
	title: "Receitas",
	route: "/incomes",
	new: "Registrar receita",
	edit: "Editar receita",
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
					data={fakeIncomes}
					columns={columns}

					facetedFilters={getFieldsWithOptions()}
					visibilityState={visibilityState}
					columnResizeMode="onChange"
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
