export type Option<T = string> = {
	label: string;
	value: T;
};

export interface Column<T extends Record<string, any> = any> {
	id: keyof T;
	title: string;
	type:
	| "text"
	| "select"
	| "hidden"
	| "id"
	| "checkbox"
	| "badge"
	| "date"
	| "textarea"
	| "badge";
	options?: Option[];
	defaultValue: T[keyof T];
	isVisible?: boolean;
	size?: number;
}

export function createColumn<T extends Record<string, any>>(
	partial: Partial<Column<T>>
): Column<T> {
	return {
		type: "text",        // valor padrão
		isVisible: true,     // valor padrão
		size: 200,           // valor padrão
		defaultValue: "",
		...partial,          // sobrescreve se vier do usuário
	} as Column<T>;
}

export type ColumnType = "text" | "id" | "date" | "select" | "checkbox" | "textarea" | "badge" | "hidden";

export interface ColumnSchema<T> {
	id: keyof T & string;
	title: string;
	type: ColumnType;
	defaultValue: any;
	isVisible?: boolean;
	size?: number;
	options?: { label: string; value: string }[];
}


