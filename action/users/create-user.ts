"use server";

import { User } from "@/app/[lang]/(dashboard)/users/lib/types/user";
import { revalidatePath } from "next/cache";

export async function createUser(user: User) {
	try {
		console.log("Usuário salvo com sucesso", user);

		revalidatePath("/users/create");

		return { message: "Usuário salvo com sucesso!" };
	} catch (error) {
		console.error("Erro ao salvar usuário:", error);
		return { message: "Erro ao salvar usuário." };
	}
}
