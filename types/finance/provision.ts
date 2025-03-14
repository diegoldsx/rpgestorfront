export type Provision = {
	id: number;
	ammount: number;
	description: string;
	documentDate?: string;
	dueDate: string;
	observations?: string;
	type?: string;
	registeredBy: string;
	status: string;
};
