"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import IncomeStats from "./components/income-stats";
import { columns, getVisibilityState } from "./components/data-table/columns";
import { FAKE_COURSES } from "@/app/mock/data";
import { getFieldsWithOptions } from "@/app/types/new/FieldConfig";
import { courseConfig } from "./types/Course";
import { DataTable } from "@/components/common/data-table/data-table";

const data = FAKE_COURSES;
const filters = getFieldsWithOptions(courseConfig);

const visibleColumns = getVisibilityState([
	"category",
	"name",
	"enrollment",
	"startDate",
	"endDate",
	"status",
]);
const CoursesPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Cursos"
				breadcrumbs={{
					title: "Cursos",
					href: "/courses",
				}}
			/>

			<div className="mt-3 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<IncomeStats />
				</div>

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

export default CoursesPage;
