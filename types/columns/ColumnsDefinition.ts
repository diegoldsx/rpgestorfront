export type Option<T = string> = {
	label: string;
	value: T;
};
type MaxDepth = 2;

type Join<K, P> = K extends string ? (P extends string ? `${K}.${P}` : never) : never;

type PathToField<T, D extends number = MaxDepth> = [D] extends [never]
	? never
	: T extends object
	? {
			[K in keyof T]: T[K] extends object ? K | Join<K, PathToField<T[K], Prev[D]>> : K;
	  }[keyof T]
	: "";

type Prev = [never, 0, 1, 2, 3]; // suporte até profundidade 3

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
