export interface Option<T> {
	value: T;
	label: string;
}

type FieldType = "text" | "date" | "select" | "number" | "boolean" | "hidden";

export interface FieldConfig<T> {
	id: keyof T;
	title: string;
	type?: FieldType;
	options?: Option<T[keyof T]>[]; // Options agora é genérico
}

export function generateFieldConfig<T>(
	fieldName: keyof T,
	title: string,
	type?: "text" | "date" | "select" | "number" | "boolean",
	options?: { value: T[keyof T]; label: string }[]
): FieldConfig<T> {
	const fieldType = typeof {} as Record<keyof T, T[keyof T]>[keyof T];

	return {
		id: fieldName,
		title: title || String(fieldName), // Convert fieldName to string if needed
		...(options && { options: options as Option<T[keyof T]>[] }),
		type: type,
	};
}

export function createOptions<T, K extends keyof T>(values: T[K][], getLabel: (value: T[K]) => string): Option<T[K]>[] {
	return values.map((value) => ({ value, label: getLabel(value) }));
}

export function getOptionsById<T>(config: FieldConfig<T>[], id: keyof T): Option<T[keyof T]>[] | undefined {
	const fieldConfig = config.find((field) => field.id === id);
	return fieldConfig?.options;
}

export function getFieldsWithOptions<T>(config: any): any[] {
	return config.filter((field: any) => field.options).map((field: any) => ({ ...field }));
}

// export type FieldConfig = {
// 	id: string;
// 	title: string;
// 	options?: Option[];
// };

// export type Option = {
// 	value: string;
// 	label: string;
// };
