import { getFakeData } from "@/utils/getFakeData";
import { z } from "zod";

export const CategorySchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	status: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;

