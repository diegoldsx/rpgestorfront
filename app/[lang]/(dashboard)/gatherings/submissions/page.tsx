"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns, getVisibilityState } from "./components/data-table/columns";
import { DataTable } from "@/components/common/data-table/data-table";

import { submissionConfig } from "./types/Submission";
import { getFieldsWithOptions } from "@/app/types/FieldConfig";
import { FAKE_SUBMISSIONS as data } from "@/app/mock/data";

const filters = getFieldsWithOptions(submissionConfig);

const visibleColumns = getVisibilityState([
	"event",
	"submitedBy",
	"authors",
	"date",
	"area",
	"status",
	"presentationLink",
]);
const SubmissionPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Submissões"
				breadcrumbs={{
					title: "Submissões",
					href: "/gatherings/submissions",
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

export default SubmissionPage;
