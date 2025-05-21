"use client";
import { useRouter } from 'next/navigation'

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useFetch } from "@/hooks/useFetch";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../components/columnSchema";
import { postData, putData } from "@/lib/httpMutations";
import { AssemblySchema, AssemblyType } from '@/types/Assembly';


export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;
	const router = useRouter()


	const { data, loading } = useFetch<AssemblyType>("/api/assemblies?id=" + id)

	const handleSubmit: SubmitHandler<AssemblyType> = async (data) => {

		if (data.id) {
			const putRes = await putData<AssemblyType>("/api/assemblies", data)
			console.log("PUT", putRes)
		}
		else {
			const postRes = await postData<AssemblyType>("/api/assemblies", data)
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
					<GenericForm<AssemblyType>
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
