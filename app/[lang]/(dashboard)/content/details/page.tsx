"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentSchema, ContentSchemaType } from "../schemas/schema";
import { FAKE_CONTENT } from "../types/data";

import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../schemas/columnSchema";
import { useFetch } from "@/hooks/useFetch";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading, error } = useFetch<ContentSchemaType>("/api/content/" + id)


	const handleSubmit: SubmitHandler<ContentSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar Conteúdo" : "Nova Conteúdo"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<GenericForm<ContentSchemaType>
						schema={ContentSchema}
						defaultValues={defaultValues}
						columns={columnSchema}
						onSubmit={handleSubmit}
						data={data || undefined}
						submitLabel="Salvar Assembleia"
					/>
				</CardContent>
			</Card>
		</div>
	);
}
