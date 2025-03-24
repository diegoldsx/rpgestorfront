"use client";

import { ExpensesForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FAKE_DATA } from "@/data/expensesData";
import { ExpenseSchemaType } from "@/schemas/finance/expense";
import { Expense } from "@/types/finance/expense";

export default function ExpensesFormPage({
	searchParams,
}: {
	searchParams: { id?: string };
}) {
	const id = searchParams.id;
	const [data, setData] = useState<ExpenseSchemaType | null>(null);

	useEffect(() => {
		if (id) {
			const fetchMessage = async () => {
				const data: ExpenseSchemaType | undefined = FAKE_DATA.find(
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
	const handleSubmit: SubmitHandler<ExpenseSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						<ExpensesForm
							data={data as ExpenseSchemaType}
							onSubmit={handleSubmit}
						/>
						{data ? "Editar despesa" : "Criar Despesa"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<ExpensesForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
