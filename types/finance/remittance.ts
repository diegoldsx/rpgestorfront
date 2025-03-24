export type Remittance = {
	id?: string;
	sender: string; // "Remetente"
	dueDate: string; // "Vencimento"
	amount: number; // "Quantia"
	description?: string; // "Descrição"
	status: string; // "Situação"
	registeredBy: string; // "Registrado por"
	documentDate: string; // "Data documento"
	observations?: string; // "Observações"
	type: string; // "Tipo"
};
