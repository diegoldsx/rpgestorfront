"use client";

import { EventForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_DATA } from "@/data/assembliesData";
import { useEffect, useState } from "react";
import { EventSchemaType } from "@/schemas/events/event";

export default function EventFormPage({ searchParams }: { searchParams: { id?: string } }) {
	const id = searchParams.id;
	const [data, setData] = useState<EventSchemaType | null>(null);
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
	const handleSubmit: SubmitHandler<EventSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{data ? "Editar evento" : "Criar evento"}</CardTitle>
				</CardHeader>

				<CardContent>
					<EventForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
