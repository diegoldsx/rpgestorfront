"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { facetedFilters, getFieldsWithOptions, getVisibilityState } from "./components/columnSchema";
import { columns } from "./components/columns";
import { ExpenseType, fakeExpenses } from "@/types/Expense";

export const moduleLabels = {
	detailsUrl: "expenses/details-page",
	title: "Despesas",
	route: "/expenses",
	new: "Registrar despesa",
	edit: "Editar despesa",
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
					data={fakeExpenses}
					columns={columns}
					facetedFilters={facetedFilters}
					visibilityState={getVisibilityState()}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
