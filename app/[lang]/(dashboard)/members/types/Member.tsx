import { StateUF } from "./StateUF";

interface Member {
	id: string;
	email: string;
	phone?: string;
	mobile?: string;
	name?: string;
	birthDate?: string;
	tradeName?: string; // N
	financialStatus: "ativo" | "inativo" | "pendente";
	billingCycle: "mensal" | "bimestral" | "trimestral" | "anual";
	paymentGroup: "Grupo Alfa" | "Grupo Beta";
	paymentMethod: "pix" | "boleto";
	type: "cpf" | "cnpj";
	password?: string;
	cep: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	state: StateUF;
	city: string;
	document: string; // CPF or CNPJ
}

const availableFilters: Record<
	string,
	{
		label: string;
		type: "select";
		options: { value: string; label: string }[];
	}
> = {
	financialStatus: {
		label: "Status Financeiro",
		type: "select",
		options: [
			{ value: "ativo", label: "Ativo" },
			{ value: "inativo", label: "Inativo" },
			{ value: "pendente", label: "Pendente" },
		],
	},
	billingCycle: {
		label: "Ciclo de Faturamento",
		type: "select",
		options: [
			{ value: "mensal", label: "Mensal" },
			{ value: "bimestral", label: "Bimestral" },
			{ value: "trimestral", label: "Trimestral" },
			{ value: "anual", label: "Anual" },
		],
	},
	paymentGroup: {
		label: "Grupo de Pagamento",
		type: "select",
		options: [
			{ value: "Grupo Alfa", label: "Grupo Alfa" },
			{ value: "Grupo Beta", label: "Grupo Beta" },
		],
	},
	paymentMethod: {
		label: "Método de Pagamento",
		type: "select",
		options: [
			{ value: "pix", label: "PIX" },
			{ value: "boleto", label: "Boleto" },
		],
	},
	type: {
		label: "Tipo de Documento",
		type: "select",
		options: [
			{ value: "cpf", label: "CPF" },
			{ value: "cnpj", label: "CNPJ" },
		],
	},
};

export type { Member, availableFilters };
