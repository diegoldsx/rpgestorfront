export type User = Readonly<{
	id: number;
	name: string;
	email: string;
	nickname: string;
	password: string;
	status: "active" | "inactive";
	redirectUrl: string;
	company: string;
	permissions: Permissions;
	role: Role;
}>;

type Permissions = "admin" | "user" | "guest";

type Role =
	| "financial"
	| "announcements"
	| "support"
	| "user"
	| "event"
	| "schedule"
	| "memberAccess"
	| "client"
	| "votingAssembly"
	| "settings"
	| "member"
	| "content"
	| "agreement";
