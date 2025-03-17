"use client";

import { MessageForm, MessageSchemaType } from "./MessageForm";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_MESSAGES } from "@/data/messagesData";
import { useEffect, useState } from "react";

export default function MessageFormPage({ searchParams }: { searchParams: { id?: string } }) {
	const id = searchParams.id;
	const [message, setMessage] = useState<MessageSchemaType | null>(null);

	useEffect(() => {
		if (id) {
			const fetchMessage = async () => {
				const message = FAKE_MESSAGES.find((message) => message.id === id);
				if (message) {
					setMessage(message);
				}
			};
			fetchMessage();
		}
	}, [id]);
	const handleSubmit: SubmitHandler<MessageSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{message ? "Editar Mensagem" : "Criar Mensagem"}</CardTitle>
				</CardHeader>

				<CardContent>
					<MessageForm onSubmit={handleSubmit} data={message || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
