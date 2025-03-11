"use server";

import { FAKE_DATA } from "@/app/[lang]/(dashboard)/users/utils/data";

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

export async function fetchUserAction(id: string | null) {
	if (id) {
		return { data: FAKE_DATA.find((d) => d.id === id), status: 200 };
	}

	return { status: 201, message: "Usuário não encontrado" };
}

export async function fetchAllUsersAction(id: string | null) {
	if (id) {
		return { data: FAKE_DATA, status: 200 };
	}

	return { status: 201, message: "Usuário não encontrado" };
}
