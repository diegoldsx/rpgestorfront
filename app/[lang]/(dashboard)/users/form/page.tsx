"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircleIcon } from "lucide-react";
import CustomForm from "@/components/form/CustomForm";
import { upsertUserAction, fetchUserAction } from "@/action/users-actions";
import { columnFields } from "../utils/columnConfig";
import { userSchema } from "../utils/User";
import { renderField } from "@/components/form/utils/formFieldRender";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface UserFormPageProps {
	searchParams: { id?: string | null };
}

export default function UserFormPage({ searchParams }: UserFormPageProps) {
	const router = useRouter();
	const userId = searchParams?.id ?? undefined;
	const [initialValues, setInitialValues] = useState<Record<string, any>>({});
	useEffect(() => {
		const fetchUserData = async () => {
			if (!userId) return;
			const { data, status } = await fetchUserAction(userId);
			if (status === 200) {
				setInitialValues(data);
			}
		};

		fetchUserData();
	}, [userId]);

	const handleSubmit = async (data: Record<string, any>) => {
		const formData = new FormData();
		Object.entries(data).forEach(([key, value]) => formData.append(key, String(value)));
		const { message } = await upsertUserAction(formData);
		toast.message(message);
		router.push("/users");
	};
	return (
		<div>
			<Card className="p-6 rounded">
				<CardHeader>
					<div className="flex items-center text-primary font-extrabold space-x-2">
						<UserCircleIcon size={32} className="text-primary" />
						<CardTitle>{userId ? "Editar usuário" : "Criar novo usuário"}</CardTitle>
					</div>
				</CardHeader>

				<CardContent className="space-y-6">
					{Object.keys(initialValues).length > 0 && (
						<CustomForm key={JSON.stringify(initialValues)} userId={userId} defaultValues={initialValues} schema={userSchema} onSubmit={handleSubmit}>
							{columnFields.map((field) => renderField<typeof userSchema._type>(field))}
						</CustomForm>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
