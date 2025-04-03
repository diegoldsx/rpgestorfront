export type DataCellProps<T> = {
	getValue: () => T;
	options?: { label: string; value: T }[];
};
