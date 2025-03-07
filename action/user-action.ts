"use server";

import { FAKE_USERS } from "./mock/users";
import { User } from "@/app/[lang]/(dashboard)/users/lib/types/user";

export const createUser = async (data: User) => {
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
