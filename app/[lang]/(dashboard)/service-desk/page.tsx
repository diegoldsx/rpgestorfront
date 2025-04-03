"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./types/metadata";
import { SERVICE_DESK_DATA } from "./types/data";
import { page } from "./utils/labels";
import { columns } from "./components/columns";

export const Page = () => {
	return (
		<Fragment>
			<HeadingPages
				title={page.title}
				breadcrumbs={{
					title: page.title,
					href: page.href,
				}}
				actions={{
					secondary: {
						text: page.actions.text,
						href: page.actions.href,
					},
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable
							data={SERVICE_DESK_DATA}
							columns={columns}
							facetedFilters={getFieldsWithOptions()}
							visibilityState={getVisibilityState()}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
