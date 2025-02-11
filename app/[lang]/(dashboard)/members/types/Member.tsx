import { StateUF } from "./StateUF";

interface BaseMember {
	id: string;
	email: string;
	phone?: string;
	mobile?: string;
	financialStatus: "ativo" | "inativo" | "pendente";
	billingCycle: "mensal" | "bimestral" | "trimestral" | "anual";
	paymentGroup: "Grupo Alfa" | "Grupo Beta";
	paymentMethod: "pix" | "boleto";
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

interface CPFMember extends BaseMember {
	type: "cpf";
	name?: string;
	birthDate?: string;
}

interface CNPJMember extends BaseMember {
	type: "cnpj";
	corporateName?: string; // Razão Social
	tradeName?: string; // Nome Fantasia
}

type Member = CPFMember | CNPJMember;

export type { CPFMember, CNPJMember, Member };
