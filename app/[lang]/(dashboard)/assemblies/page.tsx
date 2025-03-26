"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./components/columns";
import { DataTable } from "@/components/common/data-table/data-table";
import {
	assemblyFacetedFilters,
	assemblyVisibilityState,
} from "./components/columnHelper";
import { FAKE_ASSEMBLY } from "@/types/assembly/assembly";

const title = "Assemblies";
const breadcrumbs = {
	title: "Finance",
	href: "/assemblies",
};
const actions = {
	secondary: {
		text: "Register new Assembly",
		href: "/assemblies/details",
	},
};

export const Page = () => {
	return (
		<Fragment>
			<HeadingPages title={title} breadcrumbs={breadcrumbs} actions={actions} />

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable
							data={FAKE_ASSEMBLY}
							columns={columns}
							facetedFilters={assemblyFacetedFilters}
							visibilityState={assemblyVisibilityState}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
