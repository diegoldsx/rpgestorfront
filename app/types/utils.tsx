import { FieldConfig } from "@/app/types/FieldConfig";

export const getSelectableFields = (config: FieldConfig[]): FieldConfig[] => {
	const items = config.filter((c) => c.options).map((item) => ({ ...item }));
	return items;
};

export const getLabelFromValue = (
	config: FieldConfig[],
	id: string,
	value: string
): string => {
	const options = config.find((field) => field.id === id)?.options;

	const option = options?.find((op) => op.value === value);
	if (!option) return "";

	return option.label || "";
};
