"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { DataTable } from "@/components/common/data-table/data-table";
import {
	getFieldsWithOptions,
	getVisibilityState,
} from "./schemas/columnSchema";
import { FAKE_ASSEMBLY } from "./types/data";
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
							data={FAKE_ASSEMBLY}
							columns={columns}
							facetedFilters={getFieldsWithOptions()}
							visibilityState={getVisibilityState()}
							columnResizeMode="onChange"
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
