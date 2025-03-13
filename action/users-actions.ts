"use server";

import { FAKE_USER_DATA } from "@/data/userData";
import { UserSchemaType } from "@/schemas/userSchema";

export async function upsertUserAction(user: UserSchemaType) {
	if (user.id) {
		// Se o usuário tem um ID, é uma atualização
		console.log("Update user:", user);
		// Aqui você pode adicionar a lógica para atualizar o usuário no banco de dados
	} else {
		// Se o usuário não tem um ID, é uma criação
		console.log("New user:", user);
		// Aqui você pode adicionar a lógica para criar um novo usuário no banco de dados
	}
}

export async function fetchUserAction(id: string | undefined): Promise<UserSchemaType | null> {
	if (!id) return null;

	const user = FAKE_USER_DATA.find((user) => user.id === id);
	if (!user) return null;

	return user;
}

export async function fetchAllUsersAction(id: string | null) {
	if (id) {
		return { data: FAKE_USER_DATA, status: 200 };
	}

	return { status: 201, message: "Usuário não encontrado" };
}
