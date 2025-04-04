export type Option<T = string> = {
	label: string;
	value: T;
};

export interface Column<T extends Record<string, any> = any> {
	id: string;
	title: string;
	type:
		| "text"
		| "select"
		| "hidden"
		| "id"
		| "checkbox"
		| "badge"
		| "date"
		| "textarea";
	options?: Option[];
	defaultValue: T[keyof T];
	isVisible?: boolean;
	size?: number;
}

export type ColumnSchema<T extends Record<string, any> = any> = Column<T>;
