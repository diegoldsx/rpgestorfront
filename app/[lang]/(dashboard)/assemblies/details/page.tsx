"use client";

import { AssemblyForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AssemblySchemaType, FAKE_ASSEMBLY } from "@/types/assembly/assembly";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";

export default function AssemblyFormPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
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
						{data ? "Edit Assembly" : "Create Assembly"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<AssemblyForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
