"use server";

import { UserSchemaType } from "@/app/[lang]/(dashboard)/users/validation/userSchema";

export const handleUserSubmit = async (data: UserSchemaType) => {
	console.log("\x1b[33mQUsuário criado com sucesso! \x1b[0m", data);
};
