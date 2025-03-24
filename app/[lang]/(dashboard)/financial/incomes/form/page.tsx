"use client";

import { IncomeForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FAKE_DATA } from "@/data/incomeData";
import { IncomeSchemaType } from "@/schemas/finance/income";

export default function ExpensesFormPage({
	searchParams,
}: {
	searchParams: { id?: string };
}) {
	const id = searchParams.id;
	const [data, setData] = useState<IncomeSchemaType | null>(null);

	useEffect(() => {
		if (id) {
			const fetchMessage = async () => {
				const data: IncomeSchemaType | undefined = FAKE_DATA.find(
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
	const handleSubmit: SubmitHandler<IncomeSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Editar receita" : "Criar receita"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<IncomeForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
