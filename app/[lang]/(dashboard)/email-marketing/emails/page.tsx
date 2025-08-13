"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Message } from "./types/message";
import { DataTable } from "@/components/common/data-table/data-table";
import { visibilityState } from "./utils/visibility";
import { facetedFilters } from "./utils/filters";
import columns from "./columns";
const fake_emails: Message[] = [
	{ id: "1", email: "admin@example.com", status: "Ativo", group: "Admin" },
	{ id: "2", email: "user@example.com", status: "Inativo", group: "User" },
	{ id: "3", email: "guest@example.com", status: "Ativo", group: "Guest" },
];
const Page = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Mensagens"
				breadcrumbs={{
					title: "Conteúdo",
					href: "/Partnership",
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable
							data={fake_emails}
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
