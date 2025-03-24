"use client";

import { ExpensesForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAKE_DATA } from "@/data/expensesData";
import { ExpenseSchemaType } from "@/types/finance/expense";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";

export default function ExpensesFormPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
		return FAKE_DATA.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<ExpenseSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
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
