"use client";

import { z } from "zod";
import { useForm, SubmitHandler, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@radix-ui/react-form";
import Select from "@/components/Select";
import { useEffect } from "react";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { noticeSchema, NoticeSchemaType } from "@/schemas/noticeSchema";

interface noticeFormProps {
	onSubmit: SubmitHandler<NoticeSchemaType>;
	data?: Partial<NoticeSchemaType>;
}

export function NoticeForm({ onSubmit, data }: noticeFormProps) {
	const methods = useForm<NoticeSchemaType>({
		resolver: zodResolver(noticeSchema),
		defaultValues: data
			? {
					id: data.id,
					subject: data.subject || "",
					message: data.message || "",
			  }
			: {
					id: undefined,
					subject: "",
					message: "",
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
				<FormFieldComponent name="subject" label="Assunto" control={control} errors={errors} />
				<FormFieldComponent name="message" label="Mensagem" control={control} errors={errors} />

				<div className="md:col-span-2 mt-6 flex justify-end">
					<SubmitButton isSubmitting={isSubmitting} isUpdate={!!data} />
				</div>
			</Form>
		</FormProvider>
	);
}
