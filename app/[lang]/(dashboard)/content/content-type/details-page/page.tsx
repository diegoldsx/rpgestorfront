"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FAKE_CONTENT_TYPE } from "../types/data";

import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../schemas/columnSchema";
import { ContentTypeSchemaType, ContentTypeSchema } from "../schemas/schema";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return FAKE_CONTENT_TYPE.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<ContentTypeSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar Tipo de conteúdo" : "Nova Tipo de conteúdo"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<GenericForm<ContentTypeSchemaType>
						schema={ContentTypeSchema}
						defaultValues={defaultValues}
						columns={columnSchema}
						onSubmit={handleSubmit}
						data={data || undefined}
						submitLabel="Salvar Tipo de conteúdo"
					/>
				</CardContent>
			</Card>
		</div>
	);
}
