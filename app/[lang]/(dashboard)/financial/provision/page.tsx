"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import IncomeStats from "./components/income-stats";
import { ProvisionDataTable } from "./components/data-table";
import { columns } from "./components/data-table/columns";
import { fakeProvisions } from "@/app/mock/data";
const data = fakeProvisions;
const ProvisionPage = () => {
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
						<ProvisionDataTable data={data} columns={columns} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default ProvisionPage;
