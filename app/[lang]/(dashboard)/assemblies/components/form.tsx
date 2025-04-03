"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { Form } from "@radix-ui/react-form";
import Select from "@/components/Select";
import { AssemblySchema, AssemblySchemaType } from "../schemas/schema";
import { columnSchema, defaultValues } from "../schemas/columnSchema";

interface Props {
	onSubmit: SubmitHandler<AssemblySchemaType>;
	data?: Partial<AssemblySchemaType>;
}

export function AssemblyForm({ onSubmit, data }: Props) {
	const methods = useForm<AssemblySchemaType>({
		resolver: zodResolver(AssemblySchema),
		defaultValues: data ? { ...defaultValues, ...data } : defaultValues,
	});

	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
	} = methods;

	useEffect(() => {
		if (data) {
			reset({ ...defaultValues, ...data });
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
				{columnSchema.map(({ id, title, options }) => (
					<FormFieldComponent
						key={id}
						name={id}
						label={title}
						control={control}
						errors={errors}
					>
						{options && <Select options={options} />}
					</FormFieldComponent>
				))}

				<SubmitButton
					isSubmitting={isSubmitting}
					isUpdate={data !== undefined}
				/>
			</Form>
		</FormProvider>
	);
}
