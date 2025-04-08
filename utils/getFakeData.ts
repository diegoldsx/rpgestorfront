import { ZodObject, z } from "zod";

export function getFakeData<T extends ZodObject<any>>(
	schema: T,
	count: number
): Array<z.infer<T>> {
	const keys = Object.keys(schema.shape);

	return Array.from({ length: count }, (_, i) =>
		keys.reduce((acc, key) => {
			acc[key] = `${key}-${i}`;
			return acc;
		}, {} as any)
	) as Array<z.infer<T>>;
}
