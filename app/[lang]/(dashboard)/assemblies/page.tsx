
"use client"
import { DataTable } from "@/components/common/data-table/data-table";
import {
	getFieldsWithOptions,
	getVisibilityState,
} from "./schemas/columnSchema";
import { columns } from "./components/columns";
import { PageLayout } from "@/components/common/page/PageLayout";
import { useFetch } from "@/hooks/useFetch";
import { Assembly } from "./schemas/schema";

const Page = () => {

	const { data, loading, error } = useFetch<Assembly[]>("/api/assemblies")

	return (
		<PageLayout title="Assembléias" headerActions={{
			secondary: {
				text: "Registrar assembléia",
				href: "assemblies/details",
			},
		}}>
			{data && <DataTable
				data={data || []}
				columns={columns}
				facetedFilters={getFieldsWithOptions()}
				visibilityState={getVisibilityState()}
				columnResizeMode="onChange"
			/>}
		</PageLayout>
	)
}

export default Page;
