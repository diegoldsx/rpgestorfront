export type Remittance = {
	id: number;
	bank: string;
	search: string;
	searchFor: string;
	amount: number; // "Valor"
	startDate: string;
	finalDate: string;
	dateCategory: string;
	limit: string;
	type: string;
};
