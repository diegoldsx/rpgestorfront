"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./components/columnSchema";
import { columns } from "./components/columns";
import { fakeCategories } from "@/types/Category";

export const moduleLabels = {
	detailsUrl: "categories/details-page",
	title: "Categorias",
	route: "/categories",
	new: "Registrar categoria",
	edit: "Editar categoria",
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
					data={fakeCategories || []}
					columns={columns}
					facetedFilters={[]}
					visibilityState={getVisibilityState()}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
