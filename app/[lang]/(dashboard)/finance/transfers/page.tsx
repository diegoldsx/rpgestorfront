"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./components/columns";
import { DataTable } from "@/components/common/data-table/data-table";
import { facetedFilters, visibilityState } from "./components/columnHelper";
import { DATA_TRANSFERS } from "@/data/fake";

const title = "Gerar Parcela";
const breadcrumbs = {
	title: "Financeiro",
	href: "/finance",
};
const actions = {
	secondary: {
		text: "Cadastrar nova Receita",
		href: "/finance/transfers/details",
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
							data={DATA_TRANSFERS}
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
