"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategorySchema, CategorySchemaType } from "../schemas/schema";
import { FAKE_CATEGORIES } from "../types/data";

import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../schemas/columnSchema";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return FAKE_CATEGORIES.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<CategorySchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar Grupo" : "Nova Grupo"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<GenericForm<CategorySchemaType>
						schema={CategorySchema}
						defaultValues={defaultValues}
						columns={columnSchema}
						onSubmit={handleSubmit}
						data={data || undefined}
						submitLabel="Salvar Grupo"
					/>
				</CardContent>
			</Card>
		</div>
	);
}
