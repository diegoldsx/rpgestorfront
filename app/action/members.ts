// app/actions/members.ts
"use server";

import { fakeMembers } from "@/types/Member";

export async function getMembersReport() {
	return [
		{ status: "Ativo", count: 150 },
		{ status: "Inativo", count: 25 },
		{ status: "Pendente", count: 10 },
	];
}
