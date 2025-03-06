"use client";
import React from "react";
import GenericForm from "@/components/form/GenericForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userSchema, UserSchemaType } from "../validation/userSchema";
import { createUser } from "@/action/user-action";
import { userFields } from "../config/userField";
import { CheckCircleIcon, UserCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateUserPage() {
	const router = useRouter();
	const handleSubmit = async (data: UserSchemaType) => {
		createUser(data);
		toast.success("Usuário criado com sucesso!");

		router.push("/users");
	};
	return (
		<div>
			<Card className="p-6 rounded">
				<CardHeader>
					<div className="flex items-center text-primary font-extrabold space-x-2">
						<UserCircleIcon size={32} className="text-primary" />
						<CardTitle>Criar novo usuário</CardTitle>
					</div>
				</CardHeader>

				<CardContent className="space-y-6">
					<GenericForm fields={userFields} schema={userSchema} onSubmit={handleSubmit} />
				</CardContent>
			</Card>
		</div>
	);
}
