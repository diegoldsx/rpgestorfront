"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import IncomeStats from "./components/income-stats";
import { DataTable as ReturnDataTable } from "./components/data-table";
import { columns } from "./components/data-table/columns";
import { fake_returns as data } from "@/app/mock/data";
import { returnConfig } from "./types/Return";

const filters = returnConfig
	.filter((item) => item.options)
	.map((item) => ({ ...item }));

const ReturnsPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Retornos"
				breadcrumbs={{
					title: "Financeiro",
					href: "/financial/returns",
				}}
			/>

			<div className="mt-3 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<IncomeStats />
				</div>

				<Card>
					<CardContent>
						<ReturnDataTable data={data} columns={columns} filters={filters} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};
export default ReturnsPage;
