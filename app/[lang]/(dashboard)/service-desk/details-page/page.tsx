"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../components/columnSchema";
import { fakeServiceDesks, ServiceDeskSchema, ServiceDeskType } from "@/types/ServiceDesk";
import { moduleLabels } from "../page";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return fakeServiceDesks.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<ServiceDeskType> = async (data) => {
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
					<GenericForm<ServiceDeskType>
						schema={ServiceDeskSchema}
						defaultValues={defaultValues}
						columns={columnSchema}
						onSubmit={handleSubmit}
						data={data || undefined}
						submitLabel={moduleLabels.submit}
					/>
				</CardContent>
			</Card>
		</div>
	);
}
