"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./components/columns";
import { DataTable } from "@/components/common/data-table/data-table";
import { FAKE_DATA } from "@/data/incomeData";
import {
	incomeFacetedFilters,
	incomeVisibilityState,
} from "./components/columnHelper";

const title = "Receitas";
const breadcrumbs = {
	title: "Financeiro",
	href: "/finance",
};
const actions = {
	secondary: {
		text: "Cadastrar nova Receita",
		href: "/finance/incomes/details",
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
							data={FAKE_DATA}
							columns={columns}
							facetedFilters={incomeFacetedFilters}
							visibilityState={incomeVisibilityState}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
