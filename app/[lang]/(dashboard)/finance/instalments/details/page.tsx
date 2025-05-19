"use client";

import { InstalmentForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstalmentSchemaType } from "@/types/Installment";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { INSTALMENT_DATA } from "@/data/fake";

export default function InstallmentFormPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
		return INSTALMENT_DATA.find((d: any) => d.id === id);
	});

	const handleSubmit: SubmitHandler<InstalmentSchemaType> = async (data) => {
		console.table(data);
		alert(JSON.stringify(data, null, 4));
	};

	const Title = data ? "Editar parcela" : "Criar Parcela";

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{Title}</CardTitle>
				</CardHeader>

				<CardContent>
					<InstalmentForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
