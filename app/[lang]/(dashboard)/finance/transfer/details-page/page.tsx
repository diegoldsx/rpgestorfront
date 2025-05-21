"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../components/columnSchema";
import { moduleLabels } from "../page";
import { fakeTransfers, TransferSchema, TransferType } from "@/types/Transfer";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return fakeTransfers.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<TransferType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? moduleLabels.edit : moduleLabels.new}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<GenericForm<TransferType>
						schema={TransferSchema}
						defaultValues={defaultValues}
						columns={columnSchema}
						onSubmit={handleSubmit}
						data={data || undefined}
						submitLabel={data ? moduleLabels.edit : moduleLabels.new}
					/>
				</CardContent>
			</Card>
		</div>
	);
}
