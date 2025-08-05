export type Option<T = string> = {
	label: string;
	value: T;
};

export interface Column<T extends Record<string, any> = any> {
	id: string;
	title: string;
	type: "text" | "select" | "hidden" | "id" | "checkbox" | "badge" | "date" | "textarea" | "badge";
	options?: Option[];
	defaultValue: T[keyof T];
	isVisible?: boolean;
	size?: number;
}

export function createColumn<T extends Record<string, any>>(partial: Partial<Column<T>>): Column<T> {
	return {
		type: "text", // valor padrão
		isVisible: true, // valor padrão
		size: 200, // valor padrão
		defaultValue: "",
		...partial, // sobrescreve se vier do usuário
	} as Column<T>;
}

export interface ColumnSchema<T> {
	id: keyof T | DotNotationKeys<T> | string;
	title: string;
	type: "text" | "id" | "date" | "select" | "checkbox" | "textarea" | "badge" | "email" | "hidden";
	defaultValue?: any;
	isVisible?: boolean;
	condition?: (data: any) => boolean;
	size?: number;
	options?: { label: string; value: string }[];
}

type DotNotationKeys<T, Prefix extends string = ""> = {
	[K in keyof T & string]: T[K] extends object
		? `${Prefix}${K}` | DotNotationKeys<T[K], `${Prefix}${K}.`>
		: `${Prefix}${K}`;
}[keyof T & string];

export interface FormSchemas<T> {
	id: keyof T & string;
	label: string;
	field: "input" | "id" | "date" | "select" | "checkbox" | "textarea";
	defaultValue: any;
	placeholder?: string;
	condition?: (data: any) => boolean;
	isVisible?: boolean;
	size?: number;
	options?: Option[];
}
