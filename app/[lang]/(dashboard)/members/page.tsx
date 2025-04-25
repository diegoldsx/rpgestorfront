"use client";
import { DataTable } from "@/components/common/data-table/data-table";
import {
	getFieldsWithOptions,
	getVisibilityState,
} from "./schemas/columnSchema";
import { fake_members } from "./types/data";
import { columns } from "./components/columns";
import { PageLayout } from "@/components/common/page/PageLayout";

const Page = () => {
	return (
		<PageLayout title="Associados" headerActions={{
			secondary: {
				text: "Registrar Associado",
				href: "members/details-page",
			},
		}}>
			<DataTable
				data={fake_members}
				columns={columns}
				facetedFilters={getFieldsWithOptions()}
				visibilityState={getVisibilityState()}
				columnResizeMode="onChange"
			/>
		</PageLayout>)
};

export default Page;
