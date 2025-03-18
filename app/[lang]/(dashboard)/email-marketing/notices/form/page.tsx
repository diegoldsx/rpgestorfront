"use client";

import { NoticeForm } from "./NoticeForm";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_DATA } from "@/data/noticesData";
import { useEffect, useState } from "react";
import { NoticeSchemaType, noticeSchema } from "@/schemas/email-marketing/sector";

export default function NoticeFormPage({ searchParams }: { searchParams: { id?: string } }) {
	const id = searchParams.id;
	const [data, setData] = useState<NoticeSchemaType | null>(null);

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
	const handleSubmit: SubmitHandler<NoticeSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{data ? "Editar Grupo" : "Criar Grupo"}</CardTitle>
				</CardHeader>

				<CardContent>
					<NoticeForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
