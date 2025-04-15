"use client";
import { useRouter } from 'next/navigation'

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssemblySchema, Assembly } from "../schemas/schema";
import { FAKE_ASSEMBLY } from "../types/data";

import { useFetch } from "@/hooks/useFetch";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../schemas/columnSchema";
import { postData, putData } from "@/lib/httpMutations";


export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;
	const router = useRouter()


	const { data, loading } = useFetch<Assembly>("/api/assemblies?id=" + id)

	const handleSubmit: SubmitHandler<Assembly> = async (data) => {

		if (data.id) {
			const putRes = await putData<Assembly>("/api/assemblies", data)
			console.log("PUT", putRes)
		}
		else {
			const postRes = await postData<Assembly>("/api/assemblies", data)
			console.log("POST", postRes)

		}

		router.back()


	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar Assembléia" : "Nova Assembléia"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<GenericForm<Assembly>
						schema={AssemblySchema}
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
