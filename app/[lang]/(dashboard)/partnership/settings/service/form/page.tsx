"use client";

import { ServiceForm } from "./ServiceForm";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_DATA } from "@/data/discountData";
import { useEffect, useState } from "react";
import { ServiceSchemaType, ServiceSchema } from "@/schemas/partnership/serviceSchema";

export default function PaymentFormPage({ searchParams }: { searchParams: { id?: string } }) {
	const id = searchParams.id;
	const [data, setData] = useState<ServiceSchemaType | null>(null);

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
	const handleSubmit: SubmitHandler<ServiceSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{data ? "Editar pagamento" : "Criar pagamento"}</CardTitle>
				</CardHeader>

				<CardContent>
					<ServiceForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
