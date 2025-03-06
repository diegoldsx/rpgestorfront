"use client";
import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./config/columns";
import { facetedFilters, visibilityState } from "./config/userField";
import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "@/action/user-action";
import { User } from "./types/user";

export default function UsersPage({ searchParams }: { searchParams: { page: string; pageSize: string } }) {
	const page = parseInt(searchParams.page || "1", 10);
	const pageSize = parseInt(searchParams.pageSize || "10", 10);

	const {
		data: users,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["users", page, pageSize],
		queryFn: async () => {
			return fetchAllUsers(page, pageSize);
		},
	});

	if (isLoading) return <div>Carregando...</div>;
	if (isError) return <div>Erro ao carregar usuários</div>;
	console.log({ users });
	return (
		<Fragment>
			<HeadingPages
				title="Usuários"
				breadcrumbs={{ title: "Dashboard", href: "/dashboard" }}
				actions={{
					primary: { text: "Importar", href: "#" },
					secondary: { text: "Cadastrar Novo usuário", href: "/users/create" },
				}}
			/>

			<div className="mt-3 space-y-6">
				<Card>
					<CardContent>
						<DataTable data={users as User[]} columns={columns} facetedFilters={facetedFilters} visibilityState={visibilityState} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
}
