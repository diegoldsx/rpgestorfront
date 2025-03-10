"use server";

import { FAKE_USERS } from "./mock/users";
import { UserSchema, UserSchemaType } from "@/app/[lang]/(dashboard)/users/lib/validation/userSchema";

interface Response {
	status: number;
	message: string;
	data?: any;
}

export async function createUserAction(user: UserSchemaType): Promise<Response> {
	try {
		UserSchema.parse(user);
		console.log("Usuário criado:", user);

		return {
			status: 201,
			message: "Usuário criado com sucesso!",
		};
	} catch (error) {
		console.error("Erro ao validar usuário:", error);

		return {
			status: 400,
			message: "Erro ao validar os dados do usuário.",
		};
	}
}

export async function editUserAction(user: UserSchemaType): Promise<Response> {
	try {
		UserSchema.parse(user);
		console.log("Usuário editado:", user);

		return {
			status: 200,
			message: "Usuário atualizado com sucesso!",
		};
	} catch (error) {
		console.error("Erro ao modificar usuário:", error);

		return {
			status: 400,
			message: "Erro ao modificar os dados do usuário.",
		};
	}
}

export async function fetchUserAction(id: string) {
	try {
		const user = FAKE_USERS.find((user) => user.id === id);
		if (!user) {
			return { status: 404, message: `Usuário com ID ${id} não encontrado.`, data: null };
		}

		return { status: 200, message: "Usuário encontrado com sucesso!", data: user };
	} catch (error) {
		console.error("Erro ao buscar usuário:", error);
		return { status: 500, message: "Erro interno ao buscar usuário.", data: null };
	}
}
