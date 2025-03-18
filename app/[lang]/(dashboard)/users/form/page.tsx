"use client";

import { UserForm } from "./UserForm";
import { UserSchemaType } from "@/schemas/users/user";
import { SubmitHandler } from "react-hook-form";
import { upsertUserAction } from "@/action/users-actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchUser } from "@/hooks/useFetchUser";

export default function UserFormPage({ searchParams }: { searchParams: { id?: string } }) {
	const user = useFetchUser({ id: searchParams.id });

	const handleSubmit: SubmitHandler<UserSchemaType> = async (data) => {
		await upsertUserAction(data);
	};

	return (
		<div>
			<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
				<CardHeader>
					<CardTitle className="text-xl font-semibold">{user ? "Editar Usuário" : "Criar Usuário"}</CardTitle>
				</CardHeader>

				<CardContent>
					<UserForm onSubmit={handleSubmit} user={user || undefined} />
				</CardContent>
			</Card>
		</div>
	);
}
