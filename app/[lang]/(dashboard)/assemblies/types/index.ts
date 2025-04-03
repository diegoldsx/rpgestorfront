export type Assembly = {
	id: string;
	name: string;
	status: string;
	startDate?: string;
	endDate?: string;
	resultDate?: string;
	description?: string;
	type: string;
	allowChangeVote: boolean;
	displayMode: string;
	videoConference: boolean;
};
