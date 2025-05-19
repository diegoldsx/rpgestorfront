import { Option } from "../options/Option";

type FieldType = "text" | "date" | "select" | "number" | "boolean" | "hidden";


export interface FieldConfig<U extends Record<string, any>> {
	id: keyof U;
	title: string;
	type?: FieldType;
	options?: Option<string>[];
}
