"use client";

import { FormComponent } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CUSTOMER_DATA, CustomerSchemaType } from "@/types/customer/customer";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
		return CUSTOMER_DATA.find((d: any) => d.id === id);
	});

	const handleSubmit: SubmitHandler<CustomerSchemaType> = async (data) => {
		console.table(data);
		alert(JSON.stringify(data, null, 4));
	};

	const Title = data ? "Editar transferência" : "Nova Transferência";

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{Title}</CardTitle>
				</CardHeader>

				<CardContent>
					<FormComponent onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
