"use client";

import { fakePaymentGroups } from "@/app/mock/data";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Fragment } from "react";
import IncomeStats from "./components/income-stats";
import { Card, CardContent } from "@/components/ui/card";
import { PaymentGroupDataTable } from "./components/data-table";
import { columns } from "./components/data-table/columns";
const data = fakePaymentGroups;
const DynamicFieldPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Grupos de pagamento"
				breadcrumbs={{
					title: "Financeiro",
					href: "/financial/payment-groups",
				}}
			/>

			<div className="mt-3 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<IncomeStats />
				</div>

				<Card>
					<CardContent>
						<PaymentGroupDataTable data={data} columns={columns} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default DynamicFieldPage;
