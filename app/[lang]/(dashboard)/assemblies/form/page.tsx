"use client";

import { AssemblyForm } from "./AssemblyForm";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_DATA } from "@/data/assembliesData";
import { useEffect, useState } from "react";
import { AssemblySchema, AssemblySchemaType } from "@/schemas/assemblies/assembly";

export default function AssemblyFormPage({ searchParams }: { searchParams: { id?: string } }) {
	const id = searchParams.id;
	const [data, setData] = useState<AssemblySchemaType | null>(null);
	useEffect(() => {
		if (id) {
			const fetchMessage = async () => {
				const data = FAKE_DATA.find((data) => data.id === id);
				if (data) {
					setData(data);
				}
			};
			fetchMessage();
		}
	}, [id]);
	const handleSubmit: SubmitHandler<AssemblySchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{data ? "Editar assembléia" : "Criar Assembléia"}</CardTitle>
				</CardHeader>

				<CardContent>
					<AssemblyForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
