"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns, getVisibilityState } from "./components/data-table/columns";
import { FAKE_GATHERINGS } from "@/app/mock/data";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions } from "@/app/types/FieldConfig";
import { config } from "./types/Gathering";

const data = FAKE_GATHERINGS;
const filters = getFieldsWithOptions(config);

console.log(filters);

const visibleColumns = getVisibilityState([
	"id",
	"category",
	"name",
	"startDate",
	"endDate",
	"status",
]);
const GatheringPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Eventos"
				breadcrumbs={{
					title: "Eventos",
					href: "/gatherings",
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

export default GatheringPage;
