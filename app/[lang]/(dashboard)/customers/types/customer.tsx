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

export const customerKeys: (keyof Customer)[] = [
	"id",
	"customerType",
	"name",
	"cpf",
	"email",
	"billingEmail",
	"phone",
	"mobile",
	"userPassword",
	"registrationDate",
	"status",
	"code",
	"photo",
	"address",
	"companyData",
	"billingData",
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
