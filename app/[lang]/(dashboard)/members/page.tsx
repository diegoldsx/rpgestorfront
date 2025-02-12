"use client";

import { Fragment } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MembersStats from "./components/members-stats";
import MembersListTable from "./components/members-list-table";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Checkbox } from "@/components/ui/checkbox";
const MembersPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Associados"
				breadcrumbs={{ title: "Associados", href: "/members" }}
				actions={{
					primary: { text: "Importar", href: "/members/import" },
					secondary: { text: "Cadastrar Associado", href: "/members/register" },
				}}
			/>

			{/* <Card className="mt-3">
				<CardHeader className="flex-row items-center border-none mb-0"></CardHeader>
				<CardContent className="pt-0 px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
						
						<MembersStats />
					</div>
				</CardContent>
			</Card> */}
			<Card className="mt-6">
				<CardContent className="p-0">
					<MembersListTable />
				</CardContent>
			</Card>
		</Fragment>
	);
};

export default MembersPage;
