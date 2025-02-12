import { StateUF } from "../../types/StateUF";

export type Member = {
	id: string;
	email: string;
	phone?: string;
	mobile?: string;
	name?: string;
	birthDate?: string;
	corporateName?: string; // Razão Social
	tradeName?: string;
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
};

export type Member2 = {
	name?: string;
	financialStatus: "ativo" | "inativo" | "pendente";
};
