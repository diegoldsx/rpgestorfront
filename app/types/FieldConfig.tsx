type FieldType = "text" | "select" | "hidden" | "id";
export interface FieldConfig<U extends Record<string, any>> {
	id: keyof U;
	title: string;
	type?: FieldType;
	options?: Option<string>[];
	defaultValue?: any;
	isVisible?: boolean;
}
export type Option<T = string> = {
	label: string;
	value: T;
};

export function createOptions<T extends string | number>(
	values: T[],
	getLabel: (value: T) => string
): Option<T>[] {
	return values.map((value) => ({ value, label: getLabel(value) }));
}
