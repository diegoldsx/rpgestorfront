import { z } from "zod";

export const SubmissionSchema = z.object({
	id: z.number(),
	packagingName: z.string(),
	strategicPartners: z.string(),
	area: z.string(),
	authors: z.string(),
	institution: z.string(),
	date: z.string(),
	event: z.string(),
	submitedBy: z.string(),
	packageReleaseDate: z.string(),
	packageDesignAgency: z.string(),
	status: z.string(),
	presentationLink: z.string(),
	comments: z.string(),
	number: z.number(),
	presentationDate: z.string(),
	roomContent: z.string(),
});

export type SubmissionSchemaType = z.infer<typeof SubmissionSchema>;
