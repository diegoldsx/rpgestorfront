"use client";

import { ProvisionForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FAKE_DATA } from "@/data/provisionsData";
import { ProvisionSchemaType } from "@/schemas/finance/provision";
import { Provision } from "@/types/finance/provision";

export default function ProvisionsFormPage({
	searchParams,
}: {
	searchParams: { id?: string };
}) {
	const id = searchParams.id;
	const [data, setData] = useState<ProvisionSchemaType | null>(null);

	useEffect(() => {
		if (id) {
			const fetchProvision = async () => {
				const data: ProvisionSchemaType | undefined = FAKE_DATA.find(
					(data) => data.id === id
				);

				console.log(data);
				if (data) {
					setData(data);
				}
			};
			fetchProvision();
		}
	}, [id]);
	const handleSubmit: SubmitHandler<ProvisionSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						<ProvisionForm
							data={data as ProvisionSchemaType}
							onSubmit={handleSubmit}
						/>
						{data ? "Edit Provision" : "Create Provision"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<ProvisionForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
