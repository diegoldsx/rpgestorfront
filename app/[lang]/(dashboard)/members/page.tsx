

import { DataTable } from "@/components/common/data-table/data-table";
import {
	getFieldsWithOptions,
	getVisibilityState,
} from "./components/columnSchema";
import { columns } from "./components/columns";
import { PageLayout } from "@/components/common/page/PageLayout";
import { fakeMembers } from "@/types/Member";

const Page = () => {

	// const { data, loading, error } = useFetch<MemberType[]>("/api/members")


	return (
		<PageLayout title="Associados" headerActions={{
			secondary: {
				text: "Registrar associado",
				href: "members/details-page",
			},
		}}>
			{fakeMembers && <DataTable
				data={fakeMembers}
				columns={columns}
				facetedFilters={getFieldsWithOptions()}
				visibilityState={getVisibilityState()}
				columnResizeMode="onChange"
			/>}
		</PageLayout>
	)
}

export default Page;
