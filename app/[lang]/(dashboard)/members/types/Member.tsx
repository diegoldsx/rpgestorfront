import { Address } from "./Address";
import { BillingCycle } from "./BillingCycle";
import { SocialMedia } from "./SocialMedia";
import { Status } from "./Status";

export interface Member {
	id: string;
	type: "CPF" | "CNPJ";
	status: Status;
	code: string;
	document: string; // Agora tanto CPF quanto CNPJ compartilham esse campo
	corporateName: string | null; // Apenas para CNPJ
	tradeName: string | null; // Apenas para CNPJ
	name: string | null; // Apenas para CPF
	birthDate: Date | null; // Apenas para CPF
	email: string;
	paymentGroup: string;
	billingCycle: BillingCycle;
	automaticBilling: boolean;
	phone: string;
	mobile: string;
	linkedTo?: string | null;
	billingAmount: string;
	password: string;
	stateRegistration?: string | null; // Apenas para CNPJ
	municipalRegistration?: string | null; // Apenas para CNPJ
	billingEmail?: string | null; // Apenas para CNPJ
	website?: string | null; // Apenas para CNPJ
	notes?: string | null;
	additionalInfo?: string | null;
	socialMedia: SocialMedia;
	address: Address;
}
