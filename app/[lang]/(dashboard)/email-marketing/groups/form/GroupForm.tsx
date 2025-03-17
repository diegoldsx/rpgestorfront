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
import { groupSchema, GroupSchemaType } from "@/schemas/groupSchema";

interface GroupFormProps {
	onSubmit: SubmitHandler<GroupSchemaType>;
	data?: Partial<GroupSchemaType>;
}

export function GroupForm({ onSubmit, data }: GroupFormProps) {
	const methods = useForm<GroupSchemaType>({
		resolver: zodResolver(groupSchema),
		defaultValues: data
			? {
					id: data.id,
					name: data.name || "",
					total: data.total || "",
			  }
			: {
					id: undefined,
					name: "",
					total: "",
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

				<FormFieldComponent name="total" label="Total" control={control} errors={errors} />

				<div className="md:col-span-2 mt-6 flex justify-end">
					<SubmitButton isSubmitting={isSubmitting} isUpdate={!!data} />
				</div>
			</Form>
		</FormProvider>
	);
}
