"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./schemas/columnSchema";
import { FAKE_MESSAGES } from "./types/data";
import { columns } from "./components/columns";
import { ColumnDef } from "@tanstack/react-table";
import { MessageSchemaType } from "./schemas/schema";

const Page = () => {
	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title="Mensagens"
					breadcrumbs={{
						title: "Mensagens",
						href: "/messages",
					}}
					actions={{
						secondary: {
							text: "Registrar mensagem",
							href: "messages/details",
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable data={FAKE_MESSAGES} columns={[]} facetedFilters={[]} visibilityState={getVisibilityState()} />
			</CardContent>
		</Card>
	);
};

export default Page;
