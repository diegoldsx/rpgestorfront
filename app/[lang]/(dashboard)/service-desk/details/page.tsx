"use client";

import { ServiceDeskForm } from "../components/Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ServiceDeskSchemaType } from "../types/schema";
import { SERVICE_DESK_DATA } from "../types/data";

import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";

export default function ServiceDeskFormPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
		return SERVICE_DESK_DATA.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<ServiceDeskSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar Atendimento" : "Novo Atendimento"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<ServiceDeskForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
