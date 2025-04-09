"use client";
import { DataTable } from "@/components/common/data-table/data-table";
import { Category, CategorySchema, fake_categories } from "./types";
import { columns, fieldsWithOptions, visibilityState } from "./columns";
import { HeaderActions, PageLayout } from "@/components/common/page/PageLayout";


const headerActions: HeaderActions = {
	primary: {
		text: "Primary", href: "#"
	},
	secondary: {
		text: "Nova categoria", href: "categories2/details-page"
	}
}


const Page = () => {
	return (
		<PageLayout title="Categorias" headerActions={headerActions}>
			<DataTable
				data={fake_categories as Category[]}
				columns={columns}
				facetedFilters={fieldsWithOptions}
				visibilityState={visibilityState}
				columnResizeMode="onChange"
			/>
		</PageLayout >

	);
};

export default Page;
