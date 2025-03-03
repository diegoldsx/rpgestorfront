export type Email = Readonly<{
	id: number;
	email: string;
	status: "active" | "inactive";
}>;
