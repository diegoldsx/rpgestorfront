"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./components/columns";
import { DataTable } from "@/components/common/data-table/data-table";
import { facetedFilters, visibilityState } from "./components/columnHelper";
import { CUSTOMER_DATA } from "@/types/customer/customer";

const title = "Cliente";
const breadcrumbs = {
	title: "Financeiro",
	href: "/finance",
};
const actions = {
	secondary: {
		text: "Cadastrar nova Cliente",
		href: "/customers/details",
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
							data={CUSTOMER_DATA}
							columns={columns}
							facetedFilters={facetedFilters}
							visibilityState={visibilityState}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
