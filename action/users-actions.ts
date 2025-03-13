"use server";

import { FAKE_USER_DATA } from "@/data/userData";
import { UserSchemaType } from "@/schemas/userSchema";

export async function upsertUserAction(user: UserSchemaType) {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (user.id) {
		console.log("Update user:", user);
	} else {
		console.log("New user:", user);
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
