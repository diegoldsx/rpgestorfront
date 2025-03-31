export function generateNamedData<T extends Record<string, any>>(
	template: T
): Record<keyof T, string> {
	const result = {} as Record<keyof T, string>;

	for (const key in template) {
		result[key] = key;
	}

	return result;
}
