export type Course = {
	id: string;
	category: string;
	name: string;
	startDate: string;
	endDate: string;
	registrationDeadline: string;
	participantLimit: number;
	instructors: string;
	description: string;
	permissions: string;
	value: number;
	costCenter: string;
	billing: string;
	account: string;
	enrollment: string;
	paymentConfirmation: boolean;
	exemption: boolean;
	cancellation: boolean;
	inviteConfirmation: boolean;
	status: string;
};
