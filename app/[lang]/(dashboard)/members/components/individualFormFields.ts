import { FormField } from "@/components/form/GenericForm";
import { z } from "zod";

export const individualSchema = z.object({
	id: z.string().optional(),
	type: z.literal("individual"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	fullName: z.string().min(3),
	cpf: z
		.string()
		.min(11)
		.max(14)
		.regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/),
	birthDate: z.string(),
	contact: z.object({
		email: z.string().email(),
		phone: z.string(),
	}),
	paymentGroup: z.string(),
	cycle: z.string(),
	address: z.object({
		zipCode: z.string(),
		state: z.string(),
		city: z.string(),
		district: z.string(),
		street: z.string(),
		number: z.string(),
		complement: z.string().optional(),
	}),
});

export type IndividualType = z.infer<typeof individualSchema>;

export const individualDefaultValues: Partial<IndividualType> = {
	type: "individual",
	status: "active",
	code: "",
	fullName: "",
	cpf: "",
	birthDate: "",
	contact: {
		email: "",
		phone: "",
	},
	paymentGroup: "",
	cycle: "",
	address: {
		zipCode: "",
		state: "",
		city: "",
		district: "",
		street: "",
		number: "",
		complement: "",
	},
};

export const fields: FormField<IndividualType>[] = [
	{
		id: "type",
		title: "Tipo",
		type: "select",
		options: [{ label: "Pessoa Física", value: "individual" }],
		disabled: true,
	},
	{
		id: "status",
		title: "Status",
		type: "select",

		options: [
			{ label: "Ativo", value: "active" },
			{ label: "Inativo", value: "inactive" },
		],
	},
	{ id: "code", title: "Código", type: "text" },
	{ id: "fullName", title: "Nome completo", type: "text" },
	{ id: "cpf", title: "CPF", type: "text" },
	{ id: "birthDate", title: "Data de nascimento", type: "date" },
	{ id: "contact.email", title: "Email", type: "text" },
	{ id: "contact.phone", title: "Telefone", type: "text" },
	{ id: "paymentGroup", title: "Grupo de pagamento", type: "text" },
	{ id: "cycle", title: "Ciclo", type: "text" },
	{ id: "address.zipCode", title: "CEP", type: "text" },
	{ id: "address.state", title: "Estado", type: "text" },
	{ id: "address.city", title: "Cidade", type: "text" },
	{ id: "address.district", title: "Bairro", type: "text" },
	{ id: "address.street", title: "Rua", type: "text" },
	{ id: "address.number", title: "Número", type: "text" },
	{ id: "address.complement", title: "Complemento", type: "text" },
];
