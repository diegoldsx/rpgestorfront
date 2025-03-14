type FieldType = "text" | "date" | "select" | "number" | "boolean" | "hidden";

export type Option<T = string> = {
	label: string;
	value: T;
};
export interface FieldConfig<U extends Record<string, any>> {
	id: keyof U;
	title: string;
	type?: FieldType;
	options?: Option<string>[];
}
