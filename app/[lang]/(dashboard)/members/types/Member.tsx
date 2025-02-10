interface BaseMember {
	id: string;
	email: string;
	phone?: string;
	mobile?: string;
	paymentGroup: string;
	password: string;
}

interface CPFMember extends BaseMember {
	type: "CPF";
	name: string;
	birthDate: string;
	document: string; // CPF
	cep: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	state: string;
	city: string;
}

interface CNPJMember extends BaseMember {
	type: "CNPJ";
	document: string; // CNPJ
	corporateName: string; // Razão Social
	tradeName: string; // Nome Fantasia
	cep: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	state: string;
	city: string;
}

type Member = CPFMember | CNPJMember;

export type { CPFMember, CNPJMember, Member };
