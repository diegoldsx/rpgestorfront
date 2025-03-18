import { z } from "zod";
import { StateUFSchema } from "../StateUF";

export const CustomerTypeSchema = z.enum(["individual", "company"]);
export const StatusSchema = z.enum(["active", "incative", "suspended"]);

export const AddressSchema = z.object({
	zipCode: z.string(),
	street: z.string(),
	number: z.string(),
	complement: z.string().optional(),
	neighborhood: z.string(),
	state: StateUFSchema,
	city: z.string(),
	phone: z.string().optional(),
	mobile: z.string().optional(),
});

export const CompanyDataSchema = z
	.object({
		corporateName: z.string(),
		tradeName: z.string(),
		cnpj: z.string().optional(),
		businessSegment: z.string().optional(),
		fullAddress: z.string().optional(),
		website: z.string().optional(),
	})
	.optional();

export const BillingDataSchema = z
	.object({
		name: z.string(),
		email: z.string().email(),
		phone: z.string().optional(),
		mobile: z.string().optional(),
	})
	.optional();

export const CustomerSchema = z.object({
	id: z.string(),
	customerType: CustomerTypeSchema,
	name: z.string(),
	cpf: z.string().optional(),
	email: z.string().email(),
	billingEmail: z.string().email().optional(),
	phone: z.string().optional(),
	mobile: z.string().optional(),
	userPassword: z.string().optional(),
	registrationDate: z.string().optional(),
	status: StatusSchema,
	code: z.string().optional(),
	photo: z.instanceof(File).nullable().optional(),

	address: AddressSchema,
	companyData: CompanyDataSchema,
	billingData: BillingDataSchema,
});

export type CustomerSchemaType = z.infer<typeof CustomerSchema>;
