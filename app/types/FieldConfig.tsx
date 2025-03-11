type FieldType = "text" | "date" | "select" | "number" | "boolean" | "hidden";
export interface FieldConfig<U extends Record<string, any>> {
	id: keyof U;
	title: string;
	type?: FieldType;
	options?: Option<string | number>[]; // 🔹 Agora apenas `string | number`
}

export type Option<T extends string | number = string> = {
	label: string;
	value: T;
};

export function generateFieldConfig<T extends Record<string, string | number>>(
	fieldName: keyof T,
	title: string,
	type?: FieldType,
	options?: Option<string | number>[]
): FieldConfig<T> {
	return {
		id: fieldName,
		title: title || String(fieldName), // Converte `fieldName` para string se necessário
		...(options && { options }),
		type,
	};
}

export function createOptions<T extends string | number>(values: T[], getLabel: (value: T) => string): Option<T>[] {
	return values.map((value) => ({ value, label: getLabel(value) }));
}
