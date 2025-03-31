"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./components/datatable/columns";
import { DataTable } from "@/components/common/data-table/data-table";
import {
	getFieldsWithOptions,
	getVisibilityState,
} from "./components/form/fieldsMetadata";
import { SERVICE_DESK_DATA } from "./types/data";

const serviceFieldsWithOptions = getFieldsWithOptions();
const serviceDeskVisibilityState = getVisibilityState();

const title = "Assemblies";
const breadcrumbs = {
	title: "Atendimento",
	href: "/service-desk",
};
const actions = {
	secondary: {
		text: "Registrar novo atendimento",
		href: "/service-desk/details",
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
							data={SERVICE_DESK_DATA}
							columns={columns}
							facetedFilters={serviceFieldsWithOptions}
							visibilityState={serviceDeskVisibilityState}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
