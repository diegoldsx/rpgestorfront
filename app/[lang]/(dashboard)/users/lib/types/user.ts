export type User = {
	id: string;
	name: string;
	email: string;
	username: string;
	redirectUrl?: string;
	status: "active" | "inactive";
};
