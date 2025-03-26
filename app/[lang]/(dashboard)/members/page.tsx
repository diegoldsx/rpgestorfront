"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./components/columns";
import { DataTable } from "@/components/common/data-table/data-table";
import {
	memberFacetedFilters,
	memberVisibilityState,
} from "./components/columnHelper";
import { FAKE_MEMBERS } from "@/types/member/data";

const title = "Members";
const breadcrumbs = {
	title: "Finance",
	href: "/members",
};
const actions = {
	secondary: {
		text: "Criar novo Associado",
		href: "/members/details",
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
							data={FAKE_MEMBERS}
							columns={columns}
							facetedFilters={memberFacetedFilters}
							visibilityState={memberVisibilityState}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
