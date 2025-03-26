// Updated content with references to Member
// Original content from assemblies/details/page.tsx

"use client";

import { MemberForm } from "./Form";
import { SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MemberSchemaType } from "@/types/member";
import { FAKE_MEMBERS } from "@/types/member/data";
import { useFetchData } from "@/hooks/useFetchData";
import { PageParams } from "@/types/commons/PageParams";

export default function MemberFormPage({ searchParams }: PageParams) {
	const id = searchParams.id;

	const { data, loading } = useFetchData(id, (id) => {
		console.log(loading);
		return FAKE_MEMBERS.find((d) => d.id === id);
	});

	const handleSubmit: SubmitHandler<MemberSchemaType> = async (data) => {
		console.log("Submit", data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">
						{data ? "Edit Member" : "Create Member"}
					</CardTitle>
				</CardHeader>

				<CardContent>
					<MemberForm onSubmit={handleSubmit} data={data || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
