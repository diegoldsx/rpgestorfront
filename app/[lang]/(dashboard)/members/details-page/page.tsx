"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../components/columnSchema";
import { columns } from "../components/columns";
import { fakeMembers, MemberSchema, MemberType } from "@/types/Member";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return fakeMembers.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<MemberType> = async (data) => {
		console.log("Data", data);
		alert("Associado cadastrado com sucesso")
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar Associado" : "Novo Associado"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<GenericForm<MemberType>
						schema={MemberSchema}
						defaultValues={defaultValues}
						columns={columnSchema}
						onSubmit={handleSubmit}
						data={data as MemberType}
						submitLabel="Salvar Grupo"
					/>
				</CardContent>
			</Card>
		</div>
	);
}
