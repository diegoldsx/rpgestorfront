export type Content = {
	id: string;
	contentType: "content1" | "content2";
	status: "active" | "inactive";
	expirationDate?: string;
	title?: string;
	description: string;
	responsible: "user1" | "user2";
	videoConference: boolean;
	customHtml: string;
	access: "public" | "private";

};
