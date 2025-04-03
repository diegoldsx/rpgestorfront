"use client";

import { AssemblyForm } from "../components/form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AssemblySchemaType } from "../schemas/schema";
import { FAKE_ASSEMBLY } from "../types/data";

import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		return FAKE_ASSEMBLY.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<AssemblySchemaType> = async (data) => {
		console.log("Submit", data);
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
					<AssemblyForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
