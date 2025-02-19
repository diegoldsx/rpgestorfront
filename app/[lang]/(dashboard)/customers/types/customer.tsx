import { StateUF } from "@/app/types/StateUF";

export type Customer = {
	id: string;
	customerType: CustomerType;
	name: string;
	cpf?: string;
	email: string;
	billingEmail?: string;
	phone?: string;
	mobile?: string;
	userPassword?: string;
	registrationDate?: string;
	status: Status;
	code?: string;
	photo?: File | null;

	address: {
		zipCode: string;
		street: string;
		number: string;
		complement?: string;
		neighborhood: string;
		state: StateUF;
		city: string;
		phone?: string;
		mobile?: string;
	};

	companyData?: {
		corporateName: string;
		tradeName: string;
		cnpj?: string;
		businessSegment?: string;
		fullAddress?: string;
		website?: string;
	};

	billingData?: {
		name: string;
		email: string;
		phone?: string;
		mobile?: string;
	};
};

export type CustomerColumn = {
	key: string;
	label: string;
	visibility: boolean;
};

export const customerColumnsConfig: CustomerColumn[] = [
	{ key: "id", label: "ID", visibility: false },
	{ key: "name", label: "Nome", visibility: true },
	{ key: "email", label: "E-mail", visibility: true },
	{ key: "customerType", label: "Tipo", visibility: false },
	{ key: "cpf", label: "CPF", visibility: false },
	{ key: "phone", label: "Telefone", visibility: false },
	{ key: "mobile", label: "Celular", visibility: false },
	{ key: "userPassword", label: "Senha do Usuário", visibility: false },
	{ key: "registrationDate", label: "Data de Registro", visibility: false },
	{ key: "status", label: "Status", visibility: true },
	{ key: "code", label: "Código", visibility: false },
	{ key: "photo", label: "Foto", visibility: false },

	{ key: "zipCode", label: "CEP", visibility: true },
	{ key: "street", label: "Rua", visibility: false },
	{ key: "number", label: "Número", visibility: false },
	{ key: "complement", label: "Complemento", visibility: false },
	{ key: "neighborhood", label: "Bairro", visibility: false },
	{ key: "state", label: "Estado", visibility: false },
	{ key: "city", label: "Cidade", visibility: false },
	{ key: "phone", label: "Telefone", visibility: false },
	{ key: "mobile", label: "Celular", visibility: false },

	{
		key: "corporateName",
		label: "Razão Social",
		visibility: false,
	},
	{ key: "tradeName", label: "Nome Fantasia", visibility: true },
	{ key: "cnpj", label: "CNPJ", visibility: true },

	// Flattened Billing Data
	{ key: "billingEmail", label: "Email de cobrança", visibility: false },

	{ key: "billingName", label: "Nome", visibility: false },
	{ key: "billingPhone", label: "Telefone", visibility: false },
	{ key: "billingMobile", label: "Celular", visibility: false },
];

type CustomerType = "PJ" | "PF";
type Status = "ATIVO" | "INATIVO" | "PENDENTE";

export const customerTypeOptions = [
	{
		label: "Pessoa Jurídica",
		value: "PJ",
	},
	{ label: "Pessoa Física", value: "PF" },
];

export const statusOptions = [
	{
		value: "ATIVO",
		label: "Ativo",
	},
	{
		value: "INATIVO",
		label: "Inativo",
	},
	{
		value: "PENDENTE",
		label: "Pendente",
	},
];
