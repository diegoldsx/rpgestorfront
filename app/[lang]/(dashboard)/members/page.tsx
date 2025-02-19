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

			<Card className="">
				<CardContent className="p-1">
					<MembersStats />
				</CardContent>
			</Card>
			<Card className="mt-6">
				<CardContent className="p-0">
					<MembersListTable />
				</CardContent>
			</Card>
		</Fragment>
	);
};

export default MembersPage;
