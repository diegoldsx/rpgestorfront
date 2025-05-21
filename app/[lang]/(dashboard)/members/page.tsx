"use client";
import { DataTable } from "@/components/common/data-table/data-table";
import {
	getFieldsWithOptions,
	getVisibilityState,
} from "./schemas/columnSchema";
import { fakeMembers, MemberSchema, MemberType } from "@/types/Member";
import { columns } from "./components/columns";
import { PageLayout } from "@/components/common/page/PageLayout";
import { MemberSchemaType } from "@/schemas/members/member";

const Page = () => {
	return (
		<PageLayout title="Associados" headerActions={{
			secondary: {
				text: "Registrar Associado",
				href: "members/details-page",
			},
		}}>
			<DataTable
				data={fakeMembers}
				columns={columns}
				facetedFilters={getFieldsWithOptions()}
				visibilityState={getVisibilityState()}
				columnResizeMode="onChange"
			/>
		</PageLayout>)
};

export default Page;
