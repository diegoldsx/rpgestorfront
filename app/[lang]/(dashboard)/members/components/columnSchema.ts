import { Column } from "@/types/columns/ColumnsDefinition";
import { StatesUF, PaymentMethodOptions, Status } from "@/types/options";
import { Member } from "@/types/Member";
import { VisibilityState } from "@tanstack/react-table";

export const columnSchema: Array<Column<Member>> = [
	// Comum
	{
		id: "type",
		title: "Tipo de Pessoa",
		type: "select",
		defaultValue: "individual",
		isVisible: true,
		size: 120,
		options: [
			{ label: "Pessoa Física", value: "individual" },
			{ label: "Pessoa Jurídica", value: "company" },
		],
	},
	{ id: "code", title: "Código", type: "text", defaultValue: "", isVisible: true },
	{ id: "status", title: "Status", type: "select", defaultValue: "ACTIVE", isVisible: true, options: Status },

	// Pessoa Física
	{ id: "cpf", title: "CPF", type: "text", defaultValue: "", isVisible: true },
	{ id: "fullName", title: "Nome", type: "text", defaultValue: "", isVisible: true },
	{ id: "birthDate", title: "Nascimento", type: "date", defaultValue: "", isVisible: true },

	// Pessoa Jurídica
	{ id: "cnpj", title: "CNPJ", type: "text", defaultValue: "", isVisible: true },
	{ id: "corporateName", title: "Razão Social", type: "text", defaultValue: "", isVisible: true },
	{ id: "tradeName", title: "Nome Fantasia", type: "text", defaultValue: "", isVisible: true },
	{ id: "stateRegistration", title: "Insc. Estadual", type: "text", defaultValue: "", isVisible: true },
	{ id: "municipalRegistration", title: "Insc. Municipal", type: "text", defaultValue: "", isVisible: true },
	{ id: "totalEmployees", title: "Funcionários", type: "text", defaultValue: "", isVisible: true },
	{ id: "website", title: "Site", type: "text", defaultValue: "", isVisible: true },
	{
		id: "publishData",
		title: "Divulgar dados?",
		type: "select",
		defaultValue: "",
		isVisible: true,
		options: [
			{ label: "Sim", value: "true" },
			{ label: "Não", value: "false" },
		],
	},

	// Endereço principal
	{ id: "address.zipCode", title: "CEP", type: "text", defaultValue: "", isVisible: true },
	{ id: "address.street", title: "Rua", type: "text", defaultValue: "", isVisible: true },
	{ id: "address.number", title: "Número", type: "text", defaultValue: "", isVisible: true },
	{ id: "address.complement", title: "Complemento", type: "text", defaultValue: "", isVisible: true },
	{ id: "address.district", title: "Bairro", type: "text", defaultValue: "", isVisible: true },
	{ id: "address.city", title: "Cidade", type: "text", defaultValue: "", isVisible: true },
	{ id: "address.state", title: "UF", type: "select", defaultValue: "", isVisible: true, options: StatesUF },

	// Endereço cobrança
	{ id: "billingAddress.zipCode", title: "CEP Cobrança", type: "text", defaultValue: "", isVisible: true },
	{ id: "billingAddress.street", title: "Rua Cobrança", type: "text", defaultValue: "", isVisible: true },
	{ id: "billingAddress.number", title: "Número Cobrança", type: "text", defaultValue: "", isVisible: true },
	{ id: "billingAddress.complement", title: "Complemento Cobrança", type: "text", defaultValue: "", isVisible: true },
	{ id: "billingAddress.district", title: "Bairro Cobrança", type: "text", defaultValue: "", isVisible: true },
	{ id: "billingAddress.city", title: "Cidade Cobrança", type: "text", defaultValue: "", isVisible: true },
	{
		id: "billingAddress.state",
		title: "UF Cobrança",
		type: "select",
		defaultValue: "",
		isVisible: true,
		options: StatesUF,
	},

	// Contato
	{ id: "contact.phone", title: "Telefone", type: "text", defaultValue: "", isVisible: true },
	{ id: "contact.mobile", title: "Celular", type: "text", defaultValue: "", isVisible: true },
	{ id: "contact.email", title: "Email", type: "text", defaultValue: "", isVisible: true },
	{ id: "contact.billingEmail", title: "Email Cobrança", type: "text", defaultValue: "", isVisible: true },

	// Financeiro
	{ id: "paymentGroup", title: "Grupo Pagamento", type: "text", defaultValue: "", isVisible: true },
	{ id: "cycle", title: "Ciclo", type: "text", defaultValue: "", isVisible: true },
	{
		id: "paymentMethod",
		title: "Forma Pagamento",
		type: "select",
		defaultValue: "",
		isVisible: true,
		options: PaymentMethodOptions,
	},
	{
		id: "autoBilling",
		title: "Cobrança Automática",
		type: "select",
		defaultValue: "",
		isVisible: true,
		options: [
			{ label: "Sim", value: "true" },
			{ label: "Não", value: "false" },
		],
	},
	{ id: "billingAmount", title: "Valor da Cobrança", type: "text", defaultValue: "", isVisible: true },

	// Redes sociais
	{ id: "socialMedia.instagram", title: "Instagram", type: "text", defaultValue: "", isVisible: true },
	{ id: "socialMedia.facebook", title: "Facebook", type: "text", defaultValue: "", isVisible: true },
	{ id: "socialMedia.linkedin", title: "LinkedIn", type: "text", defaultValue: "", isVisible: true },

	// Extras
	{ id: "userPassword", title: "Senha", type: "text", defaultValue: "", isVisible: false },
	{ id: "logo", title: "Logo", type: "text", defaultValue: "", isVisible: false },
	{ id: "photo", title: "Foto", type: "text", defaultValue: "", isVisible: false },
];

export function getVisibilityState(visibilityArray: string[] = ["*"]): VisibilityState {
	return Object.fromEntries(
		columnSchema
			.filter(({ id }) => id !== undefined)
			.map(({ id }) => [id as string, visibilityArray.includes("*") || visibilityArray.includes(id as string)])
	);
}

export function getFieldsWithOptions() {
	return columnSchema.filter(({ options }) => !!options);
}
