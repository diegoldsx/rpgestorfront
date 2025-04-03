export type BadgeStatus =
	| "active"
	| "inactive"
	| "pending"
	| "ativo"
	| "inativo"
	| "aproved"
	| "disaproved";
type Status = BadgeStatus;

type Colors =
	| "default"
	| "destructive"
	| "success"
	| "info"
	| "warning"
	| "dark"
	| "secondary";

const statusColors: Record<string, Colors> = {
	active: "success",
	inactive: "destructive",
	inativo: "destructive",
	pending: "warning",
	ativo: "success",
	aproved: "success",
	disaproved: "destructive",
};

export const getBadgeStatus = (status: string): Colors => {
	if (status === undefined) {
		return "default";
	}
	return statusColors[status];
};
