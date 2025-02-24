"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import IncomeStats from "./components/income-stats";
import { ConferenceTable } from "./components/data-table";
import { columns } from "./components/data-table/columns";
import { fake_conferences } from "@/app/mock/data";
const data = fake_conferences;
const ConferencesPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Eventos"
				breadcrumbs={{
					title: "Eventos",
					href: "/conferences",
				}}
			/>

			<div className="mt-3 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<IncomeStats />
				</div>

				<Card>
					<CardContent>
						<ConferenceTable data={data} columns={columns} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default ConferencesPage;
