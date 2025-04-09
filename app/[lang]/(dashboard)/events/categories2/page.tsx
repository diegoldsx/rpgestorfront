"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { Category, CategorySchema } from "./types";
import { dataTableColumns, getFieldsWithOptions, getVisibilityState } from "./columns";
import { pageStrings } from "./labels";
import { getFakeData } from "@/utils/getFakeData";

export const fake_categories = getFakeData(CategorySchema, 10);


const Page = () => {
	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title={pageStrings.title}
					breadcrumbs={{
						title: pageStrings.title,
						href: pageStrings.href,
					}}
					actions={{
						secondary: {
							text: "Registrar " + pageStrings.name,
							href: pageStrings.details,
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable
					data={fake_categories as Category[]}
					columns={dataTableColumns}
					facetedFilters={getFieldsWithOptions()}
					visibilityState={getVisibilityState()}
					columnResizeMode="onChange"
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
