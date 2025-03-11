"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircleIcon } from "lucide-react";
import CustomForm from "@/components/form/CustomForm";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { upsertUserAction, fetchUserAction } from "@/action/users-actions";
import { columnFields } from "../utils/columnConfig";
import { userSchema } from "../utils/User";

interface UserFormPageProps {
	searchParams: { id?: string | null };
}

export default function UserFormPage({ searchParams }: UserFormPageProps) {
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
		await upsertUserAction(formData);
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
					<CustomForm userId={userId} defaultValues={initialValues} schema={userSchema} onSubmit={handleSubmit}>
						{columnFields.map((field) => (
							<FormField
								key={String(field.id)}
								name={field.id as any}
								render={({ field: fieldProps }) => (
									<FormItem>
										<FormLabel>{field.title}</FormLabel>
										<FormControl>
											{field.type === "select" && field.options ? (
												<Select onValueChange={(val) => fieldProps.onChange(val)} defaultValue={fieldProps.value ?? ""}>
													<SelectTrigger>
														<SelectValue placeholder="Selecione uma opção" />
													</SelectTrigger>
													<SelectContent>
														{field.options.map((option) => (
															<SelectItem key={option.value} value={option.value ?? ""}>
																{option.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											) : (
												<Input type={field.type === "number" ? "number" : "text"} placeholder={`Digite ${field.title.toLowerCase()}`} {...fieldProps} />
											)}
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						))}
					</CustomForm>
				</CardContent>
			</Card>
		</div>
	);
}
