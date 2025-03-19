export type Remittance = {
	id?: string;
	bank: string;
	search: string;
	searchFor: string;
	amount: string; // "Valor"
	startDate: string;
	finalDate: string;
	dateCategory: string;
	limit: string;
	type: string;
};
