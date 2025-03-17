import { z } from "zod";

export const sectorSchema = z
	.object({
		id: z.string().optional(),
		name: z.string().min(3, "O nome do  é obrigatório"),
	})
	.partial();

export type SectorSchemaType = z.infer<typeof sectorSchema>;
