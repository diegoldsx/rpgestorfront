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

export type ColumnType = "text" | "id" | "date" | "select" | "checkbox";

export interface ColumnSchema<T> {
	id: keyof T & string;
	title: string;
	type: ColumnType;
	defaultValue: string;
	isVisible?: boolean;
	size?: number;
	options?: { label: string; value: string }[];
}
