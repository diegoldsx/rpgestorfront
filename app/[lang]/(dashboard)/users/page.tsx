"use client";
import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./lib/config/columns";
import { facetedFilters, visibilityState } from "./lib/config/userField";
import { useQuery } from "@tanstack/react-query";
import { User } from "./lib/types/user";
import { FAKE_USERS } from "@/action/mock/users";
import Link from "next/link";

export default function UsersPage({ searchParams }: { searchParams: { page: string; pageSize: string } }) {
	const page = parseInt(searchParams.page || "1", 10);
	const pageSize = parseInt(searchParams.pageSize || "10", 10);

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
						<DataTable data={FAKE_USERS as User[]} columns={columns} facetedFilters={facetedFilters} visibilityState={visibilityState} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
}
