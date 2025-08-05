import { MemberSchemaType } from "@/schemas/members/member";
import { Column, ColumnSchema, Option } from "@/types/columns/ColumnsDefinition";
import { MemberType, MemberSchema } from "@/types/Member";

export const memberTypeOptions: Option[] = [
	{ label: "Pessoa Física", value: "individual" },
	{ label: "Pessoa Jurídica", value: "company" },
];

export const memberStatusOptions: Option[] = [
	{ label: "Ativo", value: "active" },
	{ label: "Inativo", value: "inactive" },
];

export const columnSchema: ColumnSchema<MemberType>[] = [
	{ id: "id", title: "ID", type: "id", defaultValue: "", isVisible: false },

	{
		id: "type",
		title: "Tipo",
		defaultValue: memberTypeOptions[0].value,
		type: "text",
		options: memberTypeOptions,
	},
	{
		id: "status",
		defaultValue: "active",
		title: "Status",
		type: "select",
		options: memberStatusOptions,
	},

	// Comum
	{ id: "address.zipCode", title: "CEP", type: "text", defaultValue: "" },
	{ id: "address.state", title: "Estado", type: "text", defaultValue: "" },
	{ id: "address.city", title: "Cidade", type: "text", defaultValue: "" },
	{ id: "address.district", title: "Bairro", type: "text", defaultValue: "" },
	{ id: "address.street", title: "Rua", type: "text", defaultValue: "" },
	{ id: "address.number", title: "Número", type: "text", defaultValue: "" },
	{ id: "address.complement", title: "Complemento", type: "text", defaultValue: "" },

	// Campos para pessoa física
	{
		id: "fullName",
		title: "Nome completo",
		type: "text",
		defaultValue: "",
		condition: (data: any) => data?.type === "individual",
	},
	{
		id: "cpf",
		title: "CPF",
		type: "text",
		defaultValue: "",
		condition: (data: any) => data?.type === "individual",
	},
	{
		id: "birthDate",
		defaultValue: "",
		title: "Data de nascimento",
		type: "date",
		condition: (data: any) => data?.type === "individual",
	},
	{
		id: "contact.email",
		title: "Email",
		type: "email",
		condition: (data: any) => data?.type === "individual",
	},
	{
		id: "contact.phone",
		title: "Telefone",
		type: "text",
		condition: (data: any) => data?.type === "individual",
	},
	{
		id: "paymentGroup",
		title: "Grupo de pagamento",
		type: "text",
		defaultValue: "grupo1",
		condition: (data: any) => data?.type === "individual",
	},
	{
		id: "cycle",
		title: "Ciclo",
		type: "text",
		condition: (data: any) => data?.type === "individual",
	},

	// Campos para pessoa jurídica
	{
		id: "corporateName",
		title: "Razão social",
		type: "text",
		condition: (data: any) => data?.type === "company",
	},
	{
		id: "cnpj",
		title: "CNPJ",
		type: "text",
		condition: (data: any) => data?.type === "company",
	},
	{
		id: "stateRegistration",
		title: "Inscrição estadual",
		type: "text",
		condition: (data: any) => data?.type === "company",
	},
	{
		id: "municipalRegistration",
		title: "Inscrição municipal",
		type: "text",
		condition: (data: any) => data?.type === "company",
	},
];
