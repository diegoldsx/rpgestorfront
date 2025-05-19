import { z } from "zod";
import { StatusEnum } from "./options";

export const EventSchema = z.object({
	id: z.string(),
	name: z.string(),
	status: StatusEnum,
});

export type EventType = z.infer<typeof EventSchema>;

export const fakeEvents: EventType[] = [
	{ id: '1', name: "Event 1", status: "active" },
	{ id: '2', name: "Event 2", status: "active" },
	{ id: '3', name: "Event 3", status: "inactive" },
]
