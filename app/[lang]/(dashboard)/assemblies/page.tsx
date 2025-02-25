"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns, getVisibilityState } from "./columns";
import { FAKE_ASSEMBLIES } from "@/app/mock/data";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions } from "@/app/types/FieldConfig";
import { assemblyConfig } from "./Assembly";

const data = FAKE_ASSEMBLIES;
const filters = getFieldsWithOptions(assemblyConfig);

const visibleColumns = getVisibilityState([
	"name",
	"status",
	"startDate",
	"endDate",
]);

const AssembliesPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Assembléia"
				breadcrumbs={{
					title: "Assembléia",
					href: "/assemblies",
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable
							data={data}
							columns={columns}
							facetedFilters={filters}
							visibilityState={visibleColumns}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default AssembliesPage;
