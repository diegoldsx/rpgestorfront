"use client";

import { z } from "zod";
import { useForm, SubmitHandler, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@radix-ui/react-form";
import Select from "@/components/Select";
import { useEffect } from "react";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { options } from "../options";
import { DiscountSchemaType, DiscountSchema } from "@/schemas/partnership/discount";

interface Props {
	onSubmit: SubmitHandler<DiscountSchemaType>;
	data?: Partial<DiscountSchemaType>;
}

export function DiscountForm({ onSubmit, data }: Props) {
	const methods = useForm<DiscountSchemaType>({
		resolver: zodResolver(DiscountSchema),
		defaultValues: data
			? {
					id: data.id,
					name: data.name || "",
					status: data.status || "active",
			  }
			: {
					id: undefined,
					name: "",
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
