import { generateFieldConfig } from "@/app/types/FieldConfig";
import { FieldConfig } from "@/app/types/FieldConfig";

export type Category = {
	id: number;
	name: string;
	status: "ativo" | "inativo";
};

export const categoryConfig: FieldConfig<Category>[] = [
	generateFieldConfig<Category>("id", "ID", "text"),

	generateFieldConfig<Category>("name", "Nome", "text"),

	generateFieldConfig<Category>("status", "Situação", "select", [
		{ value: "ativo", label: "Ativo" },
		{ value: "inativo", label: "Inativo" },
	]),
];
