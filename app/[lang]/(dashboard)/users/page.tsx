"use client";
import { DataTable } from "@/components/common/data-table/data-table";
import { fake_users, User } from "./types";
import { HeaderActions, PageLayout } from "@/components/common/page/PageLayout";
import { useSession } from "next-auth/react";
import { columns } from "./columns";
import { facetedFilters } from "./columnSchema";

const headerActions: HeaderActions = {
	primary: {
		text: "Primary",
		href: "#",
	},
	secondary: {
		text: "Novo usuário",
		href: "users/details-page",
	},
};

const Page = () => {
	const { data: session, status } = useSession();
	console.log(session);

	return (
		<PageLayout title="Users" headerActions={headerActions}>
			<DataTable data={fake_users as User[]} columns={columns} facetedFilters={facetedFilters} />
		</PageLayout>
	);
};

export default Page;
