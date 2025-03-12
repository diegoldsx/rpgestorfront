"use server";

import { FAKE_DATA } from "@/app/[lang]/(dashboard)/users/utils/data";
import { UserSchemaType } from "@/app/[lang]/(dashboard)/users/utils/User";

export async function upsertUserAction(formData: FormData) {
	try {
		const data = Object.fromEntries(formData.entries());

		if (data.id) {
			console.log(`Atualizando usuário ${data.id} com os dados:`, data);
			return { status: 200, message: "Usuário atualizado com sucesso" };
		} else {
			console.log("Criando novo usuário com os dados:", data);
			return { status: 201, message: "Usuário criado com sucesso" };
		}
	} catch (error) {
		console.error("Erro ao processar ação:", error);
		return { status: 500, message: "Erro ao processar solicitação" };
	}
}

export async function fetchUserAction(id: string | undefined): Promise<UserSchemaType | null> {
	if (!id) {
		return null; // Retorna null se o ID for undefined
	}

	// Simulação de uma chamada à API
	const users: UserSchemaType[] = [
		{
			id: "1",
			name: "John Doe",
			email: "john@example.com",
			status: "active",
			username: "johndoe123",
		},
		{
			id: "2",
			name: "Jane Doe",
			email: "jane@example.com",
			status: "inactive",
			username: "janedoe456",
		},
	];

	const user = users.find((user) => user.id === id);
	return (user as UserSchemaType) || null;
}

export async function fetchAllUsersAction(id: string | null) {
	if (id) {
		return { data: FAKE_DATA, status: 200 };
	}

	return { status: 201, message: "Usuário não encontrado" };
}
