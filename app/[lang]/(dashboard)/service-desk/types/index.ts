import { z } from "zod";

export type Fields =
	| "id"
	| "registration"
	| "document"
	| "member"
	| "phone"
	| "email"
	| "company"
	| "sector"
	| "local"
	| "appointmentDate"
	| "appointmentHour"
	| "description";

export type ServiceDesk = {
	id?: string;
	registration: string;
	document: string;
	member: string;
	phone: string;
	email: string;
	company: string;
	sector: "setor1" | "setor2";
	local: "local1" | "local2";
	appointmentDate: string;
	appointmentHour: string;
	description: string;
};
