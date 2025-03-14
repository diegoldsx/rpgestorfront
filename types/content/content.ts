export type Content = {
	id: number;
	contentType: string;
	status: string;
	expirationDate?: string;
	title?: string;
	description: string;
	responsible: string;
	videoConference: boolean;
	customHtml: string;
	access: string;
};
