import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { schemaType, schema } from "../utils/User";
import { createUserAction, editUserAction, fetchUserAction } from "@/action/users-actions";
import { columnFields } from "../utils/columnConfig";
import { UserCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/form/Form";

export const submitAction = async (form: FormData) => {
	"use server";
	console.log("Enviado ao servidor", form);
};

export const fetchAction = async (form: FormData) => {
	"use server";
	console.log("Enviado ao servidor", form);
};

export default function UserFormPage() {
	const router = useRouter();
	const params = useSearchParams();

	const userId = params.get("id");

	console.log({ userId });

	const [defaultValue, setUserData] = useState<schemaType>();
	useEffect(() => {
		const fetchUser = async () => {
			if (!userId) return;

			try {
				const { data, status, message } = await fetchUserAction(userId);
				if (status === 200) {
					setUserData(data as schemaType);
				} else {
					console.error(message);
				}
			} catch (error) {
				console.error("Erro ao buscar usuário:", error);
			}
		};

		fetchUser();
	}, [userId]);

	const handleSubmit = async (data: schemaType) => {
		if (userId) {
			const user = await editUserAction(data);
			toast.success("Usuário modificado com sucesso");
		} else {
			const { message } = await createUserAction(data);
			toast.success(message);
		}

		router.push("/users");
	};

	return (
		<div>
			<Card className="p-6 rounded">
				<CardHeader>
					<div className="flex items-center text-primary font-extrabold space-x-2">
						<UserCircleIcon size={32} className="text-primary" />
						<CardTitle>{userId ? "Editar usuário" : "Criar novo usuário"}</CardTitle>
					</div>
				</CardHeader>

				<CardContent className="space-y-6">
					<Form fields={columnFields} schema={schema} onSubmit={handleSubmit} initialValues={defaultValue} />
				</CardContent>
			</Card>
		</div>
	);
}
