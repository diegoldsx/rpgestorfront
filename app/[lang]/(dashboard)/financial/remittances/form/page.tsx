"use client";

import { RemittancesForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FAKE_DATA } from "@/data/remittanceData";
import { RemittanceSchemaType } from "@/schemas/finance/remittance";
import { Remittance } from "@/types/finance/remittance";

export default function RemittancesFormPage({
	searchParams,
}: {
	searchParams: { id?: string };
}) {
	const id = searchParams.id;
	const [data, setData] = useState<RemittanceSchemaType | null>(null);

	useEffect(() => {
		if (id) {
			const fetchRemittance = async () => {
				const data: RemittanceSchemaType | undefined = FAKE_DATA.find(
					(data) => data.id === id
				);

				console.log(data);
				if (data) {
					setData(data);
				}
			};
			fetchRemittance();
		}
	}, [id]);
	const handleSubmit: SubmitHandler<RemittanceSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						<RemittancesForm
							data={data as RemittanceSchemaType}
							onSubmit={handleSubmit}
						/>
						{data ? "Editar remessa" : "Criar Remessa"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<RemittancesForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
