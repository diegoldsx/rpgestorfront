"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@radix-ui/react-form";
import Select from "@/components/Select";
import { useEffect } from "react";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { columnConfig, defaultValues } from "../components/columnHelper";
import { ExpenseSchemaType, ExpenseSchema } from "@/types/finance/expense";

interface Props {
	onSubmit: SubmitHandler<ExpenseSchemaType>;
	data?: Partial<ExpenseSchemaType>;
}

export function ExpensesForm({ onSubmit, data }: Props) {
	const methods = useForm<ExpenseSchemaType>({
		resolver: zodResolver(ExpenseSchema),
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
	console.log(errors);
	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit(onSubmit)(event);
				}}
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				{columnConfig.map(({ id, title, options }) => (
					<FormFieldComponent
						key={id}
						name={id}
						label={title}
						control={control}
						errors={errors}
					>
						{options ? <Select options={options} /> : <></>}
					</FormFieldComponent>
				))}

				<div className="md:col-span-2 mt-6 flex justify-end">
					<SubmitButton isSubmitting={isSubmitting} isUpdate={!!data} />
				</div>
			</Form>
		</FormProvider>
	);
}
