"use client";

import { TransferForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransferSchemaType } from "@/types/finance/transfer";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { DATA_TRANSFERS } from "@/data/fake";

export default function InstallmentFormPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
		return DATA_TRANSFERS.find((d: any) => d.id === id);
	});

	const handleSubmit: SubmitHandler<TransferSchemaType> = async (data) => {
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
					<TransferForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
