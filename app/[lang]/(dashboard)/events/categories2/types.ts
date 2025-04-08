import { getFakeData } from "@/utils/getFakeData";
import { z } from "zod";

export const CategorySchema = z.object({
	id: z.string(),
	name: z.string(),
	status: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;

export const fake_data = getFakeData(CategorySchema, 10);
