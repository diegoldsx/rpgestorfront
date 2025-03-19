"use client";

import { SubmissionsForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { SubmissionSchemaType } from "@/schemas/events/submission";
import { FAKE_DATA } from "@/data/submissionsData";

export default function SubmissionsFormPage({
	searchParams,
}: {
	searchParams: { id?: string };
}) {
	const id = searchParams.id;
	const [data, setData] = useState<SubmissionSchemaType | null>(null);

	useEffect(() => {
		if (id) {
			const fetchMessage = async () => {
				const data: SubmissionSchemaType | undefined = FAKE_DATA.find(
					(data) => data.id === id
				);

				console.log(data);
				if (data) {
					setData(data);
				}
			};
			fetchMessage();
		}
	}, [id]);
	const handleSubmit: SubmitHandler<SubmissionSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar assembléia" : "Criar Assembléia"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<SubmissionsForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
