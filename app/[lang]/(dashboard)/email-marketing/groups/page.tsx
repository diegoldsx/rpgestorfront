"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./schemas/columnSchema";
import { FAKE_GROUPS } from "./types/data";
import { columns } from "./components/columns";

const Page = () => {
	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title="Grupos"
					breadcrumbs={{
						title: "grupos",
						href: "/groups",
					}}
					actions={{
						secondary: {
							text: "Registrar grupo",
							href: "groups/details-page",
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable
					data={FAKE_GROUPS}
					columns={columns}
					facetedFilters={getFieldsWithOptions()}
					visibilityState={getVisibilityState()}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
