"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns, getVisibilityState } from "./components/data-table/columns";
import { DataTable } from "@/components/common/data-table/data-table";

import { categoryConfig } from "./types/Category";
import { getFieldsWithOptions } from "@/app/types/FieldConfig";
import { FAKE_CATEGORIES as data } from "@/app/mock/data";

const filters = getFieldsWithOptions(categoryConfig);

const visibleColumns = getVisibilityState(["id", "name", "status"]);
const CategoriesPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Categorias"
				breadcrumbs={{
					title: "Categorias",
					href: "/gatherings/categories",
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable
							columns={columns}
							data={data}
							facetedFilters={filters}
							visibilityState={visibleColumns}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default CategoriesPage;
