import { FormField } from "@/components/form/GenericForm";
import { z } from "zod";

export type CompanyType = z.infer<typeof companySchema>;

export const companySchema = z.object({
	id: z.string().optional(),
	type: z.literal("company"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	corporateName: z.string(),
	cnpj: z
		.string()
		.min(14)
		.max(18)
		.regex(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/),
	stateRegistration: z.string(),
	municipalRegistration: z.string(),
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
export const fields: FormField<CompanyType>[] = [
	{ id: "code", title: "Código", type: "text" },
	{ id: "corporateName", title: "Razão Social", type: "text" },
	{ id: "cnpj", title: "CNPJ", type: "text" },
	{ id: "stateRegistration", title: "Inscrição Estadual", type: "text" },
	{ id: "municipalRegistration", title: "Inscrição Municipal", type: "text" },

	{
		id: "status",
		title: "Status",
		type: "select",
		options: [
			{ label: "Ativo", value: "active" },
			{ label: "Inativo", value: "inactive" },
		],
	},

	// Endereço
	{ id: "address.zipCode", title: "CEP", type: "text" },
	{ id: "address.state", title: "Estado", type: "text" },
	{ id: "address.city", title: "Cidade", type: "text" },
	{ id: "address.district", title: "Bairro", type: "text" },
	{ id: "address.street", title: "Rua", type: "text" },
	{ id: "address.number", title: "Número", type: "text" },
	{ id: "address.complement", title: "Complemento", type: "text" },
];

export const companyDefaultValues: CompanyType = {
	id: "",
	type: "company",
	code: "",
	cnpj: "",
	corporateName: "",
	stateRegistration: "",
	municipalRegistration: "",
	status: "active",
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
