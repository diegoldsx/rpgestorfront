"use client";

import { useForm, SubmitHandler, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@radix-ui/react-form";
import { z } from "zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Select from "@/components/Select";
import { userOptions } from "../utils/columnConfig";
import { useEffect } from "react";

// Schema de validação do usuário
const UserSchema = z.object({
	id: z.string().optional(),
	name: z.string().min(3, "O nome é obrigatório"),
	email: z.string().email("O email é obrigatório"),
	status: z.enum(["active", "inactive"], { required_error: "Selecione um status" }),
	redirectUrl: z.string().url("A URL fornecida é inválida").optional(),
	username: z
		.string()
		.min(6, "O nome de usuário deve ter pelo menos 6 caracteres")
		.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "O nome de usuário deve conter letras e números"),
});

type UserSchemaType = z.infer<typeof UserSchema>;

// Props do componente
interface UserFormProps {
	onSubmit: SubmitHandler<UserSchemaType>; // Função de submissão
	user?: Partial<UserSchemaType>; // Dados do usuário para edição (opcional)
}

// Componente UserForm
export function UserForm({ onSubmit, user }: UserFormProps) {
	const methods = useForm<UserSchemaType>({
		resolver: zodResolver(UserSchema),
		defaultValues: user
			? {
					id: user.id,
					name: user.name || "", // Garante que name não seja undefined
					email: user.email || "", // Garante que email não seja undefined
					status: user.status || "active", // Garante que status não seja undefined
					redirectUrl: user.redirectUrl,
					username: user.username || "", // Garante que username não seja undefined
			  }
			: {
					id: undefined,
					name: "",
					email: "",
					status: "active",
					redirectUrl: "",
					username: "",
			  },
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = methods;

	useEffect(() => {
		if (user) {
			reset(user);
		}
	}, [user, reset]);
	return (
		<Card className="max-w-5xl mx-auto p-6 shadow-lg rounded-md bg-white">
			<CardHeader>
				<CardTitle className="text-xl font-semibold">{user ? "Editar Usuário" : "Criar Usuário"}</CardTitle>
			</CardHeader>

			<CardContent>
				<FormProvider {...methods}>
					<Form
						onSubmit={(event) => {
							event.preventDefault();
							handleSubmit(onSubmit)(event);
						}}
						className="grid grid-cols-1 md:grid-cols-2 gap-4"
					>
						{/* Campo Nome */}
						<FormField name="name">
							<FormLabel>Nome</FormLabel>
							<Controller
								name="name"
								control={control}
								render={({ field }) => (
									<FormControl asChild>
										<Input {...field} placeholder="Digite seu nome" />
									</FormControl>
								)}
							/>
							{errors.name && <FormMessage className="text-red-500">{errors.name.message}</FormMessage>}
						</FormField>

						{/* Campo Email */}
						<FormField name="email">
							<FormLabel>Email</FormLabel>
							<Controller
								name="email"
								control={control}
								render={({ field }) => (
									<FormControl asChild>
										<Input {...field} placeholder="Digite seu email" type="email" />
									</FormControl>
								)}
							/>
							{errors.email && <FormMessage className="text-red-500">{errors.email.message}</FormMessage>}
						</FormField>

						{/* Campo Username */}
						<FormField name="username">
							<FormLabel>Nome de Usuário</FormLabel>
							<Controller
								name="username"
								control={control}
								render={({ field }) => (
									<FormControl asChild>
										<Input {...field} placeholder="Digite seu username" />
									</FormControl>
								)}
							/>
							{errors.username && <FormMessage className="text-red-500">{errors.username.message}</FormMessage>}
						</FormField>

						{/* Campo Status (Select) */}
						<FormField name="status">
							<FormLabel>Status</FormLabel>
							<Controller
								name="status"
								control={control}
								render={({ field }) => (
									<FormControl asChild>
										<Select options={userOptions.status} value={field.value} onChange={field.onChange} placeholder="Selecione o status" />
									</FormControl>
								)}
							/>
							{errors.status && <FormMessage className="text-red-500">{errors.status.message}</FormMessage>}
						</FormField>

						{/* Campo Redirect URL */}
						<div className="md:col-span-2">
							<FormField name="redirectUrl">
								<FormLabel>URL de Redirecionamento</FormLabel>
								<Controller
									name="redirectUrl"
									control={control}
									render={({ field }) => (
										<FormControl asChild>
											<Input {...field} placeholder="Digite a URL de redirecionamento" />
										</FormControl>
									)}
								/>
								{errors.redirectUrl && <FormMessage className="text-red-500">{errors.redirectUrl.message}</FormMessage>}
							</FormField>
						</div>

						{/* Botão de Submit */}
						<div className="md:col-span-2 mt-6 flex justify-end">
							<Button type="submit">{user ? "Atualizar" : "Criar"}</Button>
						</div>
					</Form>
				</FormProvider>
			</CardContent>
		</Card>
	);
}
