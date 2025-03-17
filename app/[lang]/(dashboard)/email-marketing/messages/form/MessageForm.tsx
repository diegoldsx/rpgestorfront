"use client";

import { z } from "zod";
import { useForm, SubmitHandler, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@radix-ui/react-form";
import Select from "@/components/Select";
import { useEffect } from "react";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { options } from "../utils/options";

export const MessageSchema = z.object({
	id: z.number(),
	name: z.string(),
	benefits: z.string(),
	contact: z.string(),
	email: z.string().email(),
	mobile: z.string(),
	phone: z.string(),
	local: z.string(),
	type: z.enum(["user1", "user2"]),
	status: z.enum(["active", "inactive"]),
});

export type MessageSchemaType = z.infer<typeof MessageSchema>;

interface MessageFormProps {
	onSubmit: SubmitHandler<MessageSchemaType>;
	data?: Partial<MessageSchemaType>;
}

export function MessageForm({ onSubmit, data }: MessageFormProps) {
	const methods = useForm<MessageSchemaType>({
		resolver: zodResolver(MessageSchema),
		defaultValues: data
			? {
					id: data.id,
					name: data.name || "",
					benefits: data.benefits || "",
					contact: data.contact || "",
					email: data.email || "",
					mobile: data.mobile || "",
					phone: data.phone || "",
					local: data.local || "",
					type: data.type || "user1",
					status: data.status || "active",
			  }
			: {
					id: undefined,
					name: "",
					benefits: "",
					contact: "",
					email: "",
					mobile: "",
					phone: "",
					local: "",
					type: "user1",
					status: "active",
			  },
	});

	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
	} = methods;

	useEffect(() => {
		if (data) {
			reset(data);
		}
	}, [data, reset]);

	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit(onSubmit)(event);
				}}
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				<FormFieldComponent name="name" label="Nome" control={control} errors={errors} />

				<FormFieldComponent name="benefits" label="Benefícios" control={control} errors={errors} />
				<FormFieldComponent name="contact" label="Contato" control={control} errors={errors} type="text" />
				<FormFieldComponent name="email" label="Email" control={control} errors={errors} type="text" />
				<FormFieldComponent name="mobile" label="Celular" control={control} errors={errors} type="text" />
				<FormFieldComponent name="phone" label="Telefone" control={control} errors={errors} type="text" />
				<FormFieldComponent name="local" label="Localidade" control={control} errors={errors} type="text" />

				<FormFieldComponent name="type" label="Tipo" control={control} errors={errors} placeholder="Selecione o tipo">
					<Select options={options.type} />
				</FormFieldComponent>
				<FormFieldComponent name="status" label="Status" control={control} errors={errors} placeholder="Selecione o status">
					<Select options={options.status} />
				</FormFieldComponent>

				<div className="md:col-span-2 mt-6 flex justify-end">
					<SubmitButton isSubmitting={isSubmitting} isUpdate={!!data} />
				</div>
			</Form>
		</FormProvider>
	);
}
