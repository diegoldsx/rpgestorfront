"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { fake_data } from "./types";
import { columns, getFieldsWithOptions, getVisibilityState } from "./columns";

const Page = () => {
	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title="Categorias"
					breadcrumbs={{
						title: "Categorias",
						href: "/categories",
					}}
					actions={{
						secondary: {
							text: "Registrar categoria",
							href: "categories/details-page",
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable
					data={fake_data}
					columns={columns}
					facetedFilters={getFieldsWithOptions()}
					visibilityState={getVisibilityState()}
					columnResizeMode="onChange"
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
