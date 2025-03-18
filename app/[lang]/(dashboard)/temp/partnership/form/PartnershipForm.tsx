"use client";

import { useForm, SubmitHandler, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@radix-ui/react-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Select from "@/components/Select";
import { userOptions } from "../utils/columnConfig";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { userSchema } from "@/schemas/users/user";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";

type UserSchemaType = z.infer<typeof userSchema>;

interface UserFormProps {
	onSubmit: SubmitHandler<UserSchemaType>;
	user?: Partial<UserSchemaType>;
}

export function UserForm({ onSubmit, user }: UserFormProps) {
	const methods = useForm<UserSchemaType>({
		resolver: zodResolver(userSchema),
		defaultValues: user
			? {
					id: user.id,
					name: user.name || "",
					email: user.email || "",
					status: user.status || "active",
					redirectUrl: user.redirectUrl,
					username: user.username || "",
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
		formState: { errors, isSubmitting },
		reset,
	} = methods;

	useEffect(() => {
		if (user) {
			reset(user);
		}
	}, [user, reset]);

	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit(onSubmit)(event);
				}}
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				<FormFieldComponent name="name" label="Nome" control={control} errors={errors} placeholder="Digite seu nome" />

				<FormFieldComponent name="email" label="Email" control={control} errors={errors} placeholder="Digite seu email" type="email" />

				<FormFieldComponent name="username" label="Nome de Usuário" control={control} errors={errors} placeholder="Digite seu username" />

				<FormFieldComponent name="status" label="Status" control={control} errors={errors} placeholder="Selecione o status">
					<Select options={userOptions.status} />
				</FormFieldComponent>

				<FormFieldComponent
					name="redirectUrl"
					label="URL de Redirecionamento"
					control={control}
					errors={errors}
					placeholder="Digite a URL de redirecionamento"
				/>

				<div className="md:col-span-2 mt-6 flex justify-end">
					<SubmitButton isSubmitting={isSubmitting} isUpdate={!!user} />
				</div>
			</Form>
		</FormProvider>
	);
}
