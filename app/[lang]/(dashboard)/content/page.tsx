"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./columns";
import { FAKE_DATA } from "./data";
import { DataTable } from "@/components/common/data-table/data-table";
import { visibilityState, facetedFilters } from "./Content";

const ContentPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Conteúdo"
				breadcrumbs={{
					title: "Conteúdo",
					href: "/content",
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

export default ContentPage;
