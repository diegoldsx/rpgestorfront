"use client";

import { ProvisionForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_DATA } from "@/data/provisionsData";
import { ProvisionSchemaType } from "@/types/finance/provision";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";

export default function ProvisionFormPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
		return FAKE_DATA.find((d: any) => d.id === id);
	});

	const handleSubmit: SubmitHandler<ProvisionSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar despesa" : "Criar Despesa"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<ProvisionForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
