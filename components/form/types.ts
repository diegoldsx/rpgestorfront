// @/components/form/types.ts

export type Field = {
	name: string;
	label: string;
	type: "text" | "email" | "select" | "date" | "checkbox" | "number";
	options?: string[];
	condition?: (data: any) => boolean;
};
