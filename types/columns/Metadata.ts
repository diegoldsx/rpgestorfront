export type Option<T = string> = {
	label: string;
	value: T;
};

export interface Field<T extends Record<string, any> = any> {
	id: Extract<keyof T, string>;
	title: string;
	type?: "text" | "select" | "hidden" | "id";
	options?: Option<T[keyof T]>[];
	defaultValue?: T[keyof T];
	isVisible?: boolean;
}

export type Metadata<T extends Record<string, any>> = Field<T>[];
