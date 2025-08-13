"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFacedFilters, getVisibilityState } from "./components/columnSchema";
import { columns } from "./components/columns";
import { fakeServiceDesks } from "@/types/ServiceDesk";

export const moduleLabels = {
	detailsUrl: "service-desk/details-page",
	title: "Atendimento",
	route: "/service-desk",
	new: "Registrar atendimento",
	edit: "Editar atendimento",
	submit: "Salvar atendimento",
};

export const Page = () => {
	return (
		<Fragment>
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

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable
							data={fakeServiceDesks}
							columns={columns}
							facetedFilters={getFacedFilters}
							visibilityState={getVisibilityState()}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
