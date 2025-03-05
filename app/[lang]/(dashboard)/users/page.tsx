"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./columns";
import { FAKE_DATA } from "./data";
import { DataTable } from "@/components/common/data-table/data-table";
import { visibilityState } from "./config/visibility";
import { facetedFilters } from "./config/filters";

const Page = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Usuários"
				breadcrumbs={{
					title: "Usuários",
					href: "/users",
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable data={FAKE_DATA} columns={columns} facetedFilters={facetedFilters} visibilityState={visibilityState} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
