interface BaseMember {
	id: string;
	email: string;
	phone?: string;
	mobile?: string;
	paymentGroup: string;
	paymentMethod: string;
	password?: string;
	cep: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	state: string;
	city: string;
	document: string; // CPF
}

interface CPFMember extends BaseMember {
	name: string;
	birthDate: string;
}

interface CNPJMember extends BaseMember {
	type: "CNPJ";
	corporateName: string; // Razão Social
	tradeName: string; // Nome Fantasia
}

type Member = CPFMember | CNPJMember;

export type { CPFMember, CNPJMember, Member };
