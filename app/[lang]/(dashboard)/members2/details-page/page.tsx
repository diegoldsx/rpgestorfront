"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MemberSchema, Member } from "../schemas/schema";
import { fake_members } from "../types/data";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../schemas/columnSchema";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return fake_members.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<Member> = async (data) => {
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
					<GenericForm<Member>
						schema={MemberSchema}
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
