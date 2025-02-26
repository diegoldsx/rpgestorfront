"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./columns";
import { FAKE_DATA } from "./data";
import { visibilityState, facetedFilters } from "./Partnership";
import { DataTable } from "@/components/common/data-table/data-table";

const PartnershipPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Conteúdo"
				breadcrumbs={{
					title: "Conteúdo",
					href: "/Partnership",
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

export default PartnershipPage;
