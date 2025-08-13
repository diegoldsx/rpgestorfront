"use client";

import { HeadingPages } from "@/components/common/heading/heading-pages";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/common/data-table/data-table";
import { facetedFilters, visibilityState } from "./components/columnSchema";
import { columns } from "./components/columns";
import { fakeInstallments as fakeData } from "@/types/Installment";

export const moduleLabels = {
	detailsUrl: "installments/details-page",
	title: "Parcelas",
	route: "/installments",
	new: "Registrar parcela",
	edit: "Editar parcela",
};

const Page = () => {
	// const { data, loading, error } =
	// 	useFetch<CustomerSchemaType[]>("/api/customer");

	return (
		<Card>
			<CardHeader>
				<HeadingPages
					title={moduleLabels.title}
					breadcrumbs={{
						title: moduleLabels.title,
						href: moduleLabels.route,
					}}
					actions={{
						secondary: {
							text: moduleLabels.new,
							href: moduleLabels.detailsUrl,
						},
					}}
				/>
			</CardHeader>

			<CardContent>
				<DataTable
					data={fakeData}
					columns={columns}
					facetedFilters={facetedFilters}
					visibilityState={visibilityState}
				/>
			</CardContent>
		</Card>
	);
};

export default Page;
