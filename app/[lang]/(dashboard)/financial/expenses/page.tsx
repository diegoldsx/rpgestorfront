"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./columns";
import { DataTable } from "@/components/common/data-table/data-table";
import { FAKE_DATA } from "@/data/expensesData";
import { facetedFilters, visibilityState } from "./columnConfig";

const title = "Despesas";
const breadcrumbs = {
	title: "Financeiro",
	href: "/financial",
};
const actions = {
	secondary: {
		text: "Cadastrar nova despesa",
		href: "/events/expenses/form",
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
