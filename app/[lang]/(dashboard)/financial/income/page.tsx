"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { ActionCard } from "@/components/common/promotional/action-card";
import IncomeStats from "./components/income-stats";
import { IncomesDataTable } from "./components/data-table/income-data-table";
import { columns } from "./components/data-table/columns";
import { fakeIncomes } from "@/app/mock/data";

const data = fakeIncomes;
console.log({ fakeIncomes });
const IncomePage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Receitas"
				breadcrumbs={{
					title: "Financeiro",
					href: "/financial/income",
				}}
				actions={{
					primary: {
						text: "Importar Receitas",
						href: "/financial/income/import",
					},
					secondary: {
						text: "Nova Receita",
						href: "/financial/income/new",
					},
				}}
			/>

			<div className="mt-3 space-y-6">
				{/* Cards de Estatísticas */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<IncomeStats />
				</div>

				<Card>
					<CardContent>
						<IncomesDataTable data={data} columns={columns} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default IncomePage;
