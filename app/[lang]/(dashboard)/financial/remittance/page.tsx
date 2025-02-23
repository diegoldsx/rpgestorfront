"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import IncomeStats from "./components/income-stats";
import { RemittanceDataTable } from "./components/data-table";
import { columns } from "./components/data-table/columns";
import { fakeRemittances } from "@/app/mock/data";
import { remittanceConfig } from "./types/Connections";

const data = fakeRemittances;
const filters = remittanceConfig
	.filter((item) => item.options)
	.map((item) => ({ ...item }));

const RemittancePage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Remessa"
				breadcrumbs={{
					title: "Financeiro",
					href: "/financial/remittance",
				}}
			/>

			<div className="mt-3 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<IncomeStats />
				</div>

				<Card>
					<CardContent>
						<RemittanceDataTable
							data={data}
							columns={columns}
							filters={filters}
						/>
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default RemittancePage;
