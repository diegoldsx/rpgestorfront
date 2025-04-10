import { Assembly } from ".";

export const FAKE_ASSEMBLY: Assembly[] = [
	{
		id: "1",
		name: "Annual General Meeting",
		status: "active",
		startDate: "2025-04-01T03:00:00.000Z",
		endDate: "2025-04-02T03:00:00.000Z",
		resultDate: "2025-04-03T03:00:00.000Z",
		description: "Discussing the annual performance and future strategies.",
		type: "AGM",
		allowChangeVote: true,
		displayMode: "online",
		videoConference: true,
	},
	{
		id: "2",
		name: "Board Meeting",
		status: "inactive",
		startDate: "2025-04-01T03:00:00.000Z",
		endDate: "2025-04-02T03:00:00.000Z",
		resultDate: "2025-04-03T03:00:00.000Z",
		description: "Quarterly board meeting to review financials.",
		type: "Board",
		allowChangeVote: false,
		displayMode: "in-person",
		videoConference: false,
	},
	{
		id: "3",
		name: "Project Kickoff",
		status: "active",
		startDate: "2025-04-01T03:00:00.000Z",
		endDate: "2025-04-02T03:00:00.000Z",
		resultDate: "2025-04-03T03:00:00.000Z",
		description: "Kickoff meeting for the new project launch.",
		type: "Kickoff",
		allowChangeVote: true,
		displayMode: "hybrid",
		videoConference: true,
	},
];
