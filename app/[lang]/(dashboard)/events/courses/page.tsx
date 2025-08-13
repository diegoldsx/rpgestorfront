"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./components/columnSchema";
import { columns } from "./components/columns";
import { fakeCourses as fakeData } from "@/types/Course";

export const moduleLabels = {
	detailsUrl: "courses/details-page",
	title: "Cursos",
	route: "/courses",
	new: "Registrar curso",
	edit: "Editar curso",
};

const Page = () => {
	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title={moduleLabels.title}
					breadcrumbs={{
						title: moduleLabels.title,
						href: moduleLabels.route,
					}}
					actions={{
						secondary: {
							text: moduleLabels.new,
							href: moduleLabels.detailsUrl,
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable data={fakeData || []} columns={columns} facetedFilters={[]} visibilityState={getVisibilityState()} />
			</CardContent>
		</Card>
	);
};

export default Page;
