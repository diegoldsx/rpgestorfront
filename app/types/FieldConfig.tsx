export type FieldConfig = {
	id: string;
	title: string;
	options?: Option[];
};

export type Option = {
	value: string;
	label: string;
};
