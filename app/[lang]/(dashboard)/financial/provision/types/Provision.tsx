export type Provision = {
	id: number;
	ammount: number;
	description: string;
	documentDate?: string;
	dueDate: string;
	observations?: string;
	type?: "DESPESA" | "OUTROS";
	registeredBy: "João" | "Maria" | "José";
	status: "APROVADO" | "REPROVADO" | "PENDENTE";
};

export const provisionConfig: { id: string; title: string; options?: any }[] = [
	{ id: "id", title: "ID" },
	{ id: "ammount", title: "Valor" },
	{ id: "description", title: "Descrição" },
	{
		id: "documentDate",
		title: "Data do documento",
	},
	{ id: "observations", title: "Observações" },
	{
		id: "type",
		title: "Tipos",
		options: [
			{ value: "DESPESA", label: "Despesas" },
			{ value: "OUTROS", label: "Outros" },
		],
	},
	{
		id: "registeredBy",
		title: "Registrado por",
		options: [
			{ value: "1", label: "João" },
			{ value: "2", label: "Maria" },
			{ value: "3", label: "José" },
		],
	},
	{
		id: "status",
		title: "Situação",
		options: [
			{ value: "APROVED", label: "Aprovado" },
			{ value: "REPROVED", label: "Reprovado" },
			{ value: "PENDENTE", label: "Pendente" },
		],
	},
];
