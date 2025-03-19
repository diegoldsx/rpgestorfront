"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@radix-ui/react-form";
import Select from "@/components/Select";
import { useEffect } from "react";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { options } from "../columnConfig";
import { EventSchema, EventSchemaType } from "@/schemas/events/event";

interface EventFormProps {
	onSubmit: SubmitHandler<EventSchemaType>;
	data?: Partial<EventSchemaType>;
}

export function EventForm({ onSubmit, data }: EventFormProps) {
	const methods = useForm<EventSchemaType>({
		resolver: zodResolver(EventSchema),
		defaultValues: {
			id: data?.id,
			name: data?.name || "",
			status: data?.status || "active",
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

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleSubmit(onSubmit)(event);
	};

	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={handleFormSubmit}
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				<FormFieldComponent
					name="email"
					label="Email"
					control={control}
					errors={errors}
					placeholder="Digite seu email"
				/>

				<FormFieldComponent
					name="status"
					label="Status"
					control={control}
					errors={errors}
					placeholder="Selecione o status"
				>
					<Select options={options.status} />
				</FormFieldComponent>

				<div className="md:col-span-2 mt-6 flex justify-end">
					<SubmitButton isSubmitting={isSubmitting} isUpdate={!!data} />
				</div>
			</Form>
		</FormProvider>
	);
}
