"use client";

import { SubmitHandler } from "react-hook-form";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm_";
import { PageLayout } from "@/components/common/page/PageLayout";
import { useFetchData } from "@/hooks/useFetchData";
import { Category, CategorySchema, fake_categories } from "../types";
import { defaultValues, fieldsProps } from "../columns";

export default function DetailsPage({ searchParams }: PageParams) {

	const { data: categoryData } = useFetchData(searchParams.id, (id) => {
		return fake_categories.find((category) => category.id === id);
	});

	const handleSubmit: SubmitHandler<Category> = async (data) => {
		console.log("Submit:", data);
	};

	return (
		<PageLayout title={categoryData ? "Editar" : "Novo"}>
			<GenericForm<Category>
				schema={CategorySchema}
				defaultValues={defaultValues}
				fields={fieldsProps}
				onSubmit={handleSubmit}
				data={categoryData ?? undefined}
				submitLabel="Salvar"
			/>
		</PageLayout>
	);
}
