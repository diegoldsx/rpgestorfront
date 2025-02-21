export type PaymentGroup = {
	id: number; // Agora o id é uma string
	name: string;
	defaultAmount: number;
	emailModel:
		| "campanhaMobile"
		| "carteirinha"
		| "carteirinhaSocio"
		| "taxaAssociativa";
	cycle: "ANUAL" | "MENSAL";
	status: "ATIVO" | "INATIVO";
};

type PaymentGroupConfig = {
	[key: string]: {
		title: string;
		options?: { value: string; label: string }[]; // `options` é opcional
	};
};

const paymentGroupConfig: PaymentGroupConfig = {
	id: { title: "ID" },
	name: { title: "Nome" },
	defaultAmount: { title: "Valor Padrão" },
	emailModel: {
		title: "Modelo Email",
		options: [
			{
				value: "campanhaMobile",
				label: "Campanha Mobile",
			},
			{
				value: "carteirinha",
				label: "Carteirinha",
			},
			{
				value: "carteirinhaSocio",
				label: "Carteirinha Sócio",
			},
			{
				value: "taxaAssociativa",
				label: "Taxa Associativa",
			},
		],
	},
};

export function getOptions(
	fieldName?: string
): { value: string; label: string }[] | undefined {
	if (!fieldName)
		return Object.values(paymentGroupConfig)
			.filter((field) => field.options)
			.flatMap((field) => field.options!);

	const field = paymentGroupConfig[fieldName];
	return field?.options;
}
