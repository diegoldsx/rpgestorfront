import { User } from '@/app/[lang]/(dashboard)/users/types';
import { api } from '@/config/axios.config';
export const registerUser = async (data: User) => {
	try {
		const response = await api.post('/user/register', data);

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
};
