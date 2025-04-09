"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm_";
import { useFetchData } from "@/hooks/useFetchData";
import { Category, CategorySchema } from "../types";
import { getDefaultValues, fieldsProps } from "../columns";
import { fake_categories } from "../page";



export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return fake_categories.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<Category> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar" : "Novo"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<GenericForm<Category>
						schema={CategorySchema}
						defaultValues={getDefaultValues()}
						fields={fieldsProps}
						onSubmit={handleSubmit}
						data={data ?? undefined}
						submitLabel="Salvar"
					/>

				</CardContent>
			</Card>
		</div>
	);
}
