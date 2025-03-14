import { StateUF } from "./StateUF";

export type Member = {
	id: string;
	email: string;
	phone?: string;
	mobile?: string;
	name?: string;
	birthDate?: string;
	corporateName?: string; // Razão Social
	tradeName?: string;
	financialStatus: string;
	billingCycle: string;
	paymentGroup: string;
	paymentMethod: string;
	type: string;
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
