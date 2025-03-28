import { api } from "@/config/axios.config";

export const getContacts = async () => {
	const response = await api.get("/chat");
	return response.data;
};

export const getMessages = async (id: any) => {
	try {
		const response = await api.get(`/chat/messages/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteMessage = async (obj: any) => {
	try {
		await api.delete(`/chat/messages/${obj.selectedChatId}`, { data: obj });
	} catch (error) {
		// Handle error gracefully (e.g., display an error message to the user)
	}
};

export const getProfile = async () => {
	const response = await api.get("/chat/profile-data");

	return response.data;
};

export const sendMessage = async (msg: any) => {
	const response = await api.post("/chat/messages", msg);
	return response.data;
};
