"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import {
	getFieldsWithOptions,
	getVisibilityState,
} from "./schemas/columnSchema";
import { FAKE_ASSEMBLY } from "./types/data";
import { page } from "./utils/labels";
import { columns } from "./components/columns";

const Page = () => {
	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title="Assembléias"
					breadcrumbs={{
						title: "Assembléias",
						href: "/assemblies",
					}}
					actions={{
						secondary: {
							text: "Registrar assembléia",
							href: "assemblies/details",
						},
					}}
				/>
			</CardHeader>

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
	);
};

export default Page;
