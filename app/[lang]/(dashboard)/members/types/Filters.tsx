import { Member } from "./Member";

type FilterField = {
	id: keyof Member;
	label: string;
	type: "string" | "select";
	options?: string[];
};

export const availableFilters: FilterField[] = [
	{
		id: "name",
		label: "Nome",
		type: "string",
	},
	{
		id: "financialStatus",
		label: "Status Financeiro",
		type: "select",
		options: ["ativo", "inativo", "pendente"],
	},
];
