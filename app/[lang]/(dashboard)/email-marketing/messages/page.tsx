"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./utils/columns";
import { DataTable } from "@/components/common/data-table/data-table";

import { FAKE_MESSAGES } from "@/data/messagesData";
import { facetedFilters, visibilityState } from "./utils/columnConfig";

const Page = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Mensagens"
				breadcrumbs={{
					title: "Conteúdo",
					href: "/Partnership",
				}}
				actions={{
					secondary: { text: "Cadastrar Nova Mensagem", href: "/email-marketing/messages/form" },
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable data={FAKE_MESSAGES} columns={columns} facetedFilters={facetedFilters} visibilityState={visibilityState} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default Page;
