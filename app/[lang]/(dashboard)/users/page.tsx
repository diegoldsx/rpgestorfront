"use client";
import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./utils/columns";
import { facetedFilters, visibilityState } from "./utils/columnConfig";
import { FAKE_USER_DATA } from "@/data/userData";
import { User } from "@/types/user/user";

export default function UsersPage() {
	return (
		<Fragment>
			<HeadingPages
				title="Usuários"
				breadcrumbs={{ title: "Dashboard", href: "/dashboard" }}
				actions={{
					primary: { text: "Importar", href: "#" },
					secondary: { text: "Cadastrar Novo usuário", href: "/users/form" },
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable data={FAKE_USER_DATA as User[]} columns={columns} facetedFilters={facetedFilters} visibilityState={visibilityState} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
}
