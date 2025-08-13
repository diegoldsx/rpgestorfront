"use client";
import { DataTable, FacetedFilter } from "@/components/common/data-table/data-table";
import { getFieldsWithOptions, getVisibilityState } from "./components/columnSchema";
import { columns } from "./components/columns";
import { PageLayout } from "@/components/common/page/PageLayout";
import { useFetch } from "@/hooks/useFetch";
import { AssemblyType } from "@/types/Assembly";

const Page = () => {
	const { data, loading, error } = useFetch<AssemblyType[]>("/api/assemblies");

	return (
		<PageLayout
			title="Assembléias"
			headerActions={{
				secondary: {
					text: "Registrar assembléia",
					href: "assemblies/details",
				},
			}}
		>
			{data && (
				<DataTable
					data={data || []}
					columns={columns}
					facetedFilters={getFieldsWithOptions() as FacetedFilter[]}
					visibilityState={getVisibilityState()}
				/>
			)}
		</PageLayout>
	);
};

export default Page;
