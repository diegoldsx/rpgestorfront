"use server";

import { UserSchemaType } from "@/app/[lang]/(dashboard)/users/validation/userSchema";
import { FAKE_USERS } from "./mock/users";
import { User } from "@/app/[lang]/(dashboard)/users/types/user";

export const getUsers = async (data: UserSchemaType) => {
	console.log("\x1b[33mQUsuário criado com sucesso! \x1b[0m", data);
};

export async function fetchAllUsers(page: number, pageSize: number): Promise<User[]> {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return FAKE_USERS as User[];
}

export async function fetchOneUser(page: number, pageSize: number): Promise<User[]> {
	const res = await fetch(`https://api.exemplo.com/users?page=${page}&pageSize=${pageSize}`);
	if (!res.ok) {
		throw new Error("Falha ao carregar usuários");
	}
	return res.json();
}
