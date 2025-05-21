"use client";

import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm";
import { columnSchema, defaultValues } from "../components/columnSchema";
import { fakeSubmissions, SubmissionType, SubmissionSchema } from "@/types/Submission";
import { moduleLabels } from "../page";

export default function DetailsPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data } = useFetchData(id, (id) => {
		return fakeSubmissions.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<SubmissionType> = async (data) => {
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
					<GenericForm<SubmissionType>
						schema={SubmissionSchema}
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
