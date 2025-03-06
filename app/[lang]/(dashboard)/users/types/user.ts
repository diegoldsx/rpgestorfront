export type User = {
	name: string;
	email: string;
	username: string;
	redirectUrl?: string;
	status: "active" | "inactive";
};
