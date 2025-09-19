import { z } from "zod";
import { StatusOptions, StatusEnum } from "./options";
import { GroupSchema } from "./Group";

export const STATUS_VALUES = ["active", "pending", "delivered"] as const;
export const StatusValueSchema = z.enum(STATUS_VALUES);
export type StatusValue = z.infer<typeof StatusValueSchema>; // "active" | "pending" | "delivered"

export const STATUSES = [
	{ value: "active", label: "Ativo" },
	{ value: "pending", label: "Pendente" },
	{ value: "delivered", label: "Entregue" },
] as const;

export type StatusItem = { value: StatusValue; label: string };

// ready-to-use select options
export const STATUS_OPTIONS: { value: StatusValue; label: string }[] = STATUSES.map((s) => ({
	value: s.value,
	label: s.label,
}));

// arrays de values / labels
export const STATUS_VALUES_ARRAY: StatusValue[] = STATUSES.map((s) => s.value);
export const STATUS_LABELS_ARRAY: string[] = STATUSES.map((s) => s.label);

// lookup rápido (O(1)) para label a partir do value
export const STATUS_LABEL_MAP: Record<StatusValue, string> = STATUS_OPTIONS.reduce((acc, cur) => {
	acc[cur.value] = cur.label;
	return acc;
}, {} as Record<StatusValue, string>);

// helpers
export const getStatusLabel = (v: StatusValue) => STATUS_LABEL_MAP[v] ?? v;
export const isValidStatus = (v: unknown): v is StatusValue => StatusValueSchema.safeParse(v).success;

export const EmailSchema = z.object({
	id: z.string().optional(),
	email: z.string(),
	status: StatusValueSchema,
	group: GroupSchema,
});

export type EmailType = z.infer<typeof EmailSchema>;
