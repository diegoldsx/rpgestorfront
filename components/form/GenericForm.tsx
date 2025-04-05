"use client";

import {
	useForm,
	FormProvider,
	SubmitHandler,
	FieldValues,
	DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@radix-ui/react-form";
import { useEffect } from "react";
import { z, ZodType } from "zod";
import { SubmitButton } from "@/components/SubmitButton";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import Select from "@/components/Select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/Checkbox";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";

interface GenericFormProps<T extends FieldValues> {
	schema: ZodType<T>;
	defaultValues: DefaultValues<T>;
	columns: ColumnSchema[];
	onSubmit: SubmitHandler<T>;
	data?: Partial<T>;
	submitLabel?: string;
}

export function GenericForm<T extends FieldValues>({
	schema,
	defaultValues,
	columns,
	onSubmit,
	data,
	submitLabel = "Salvar",
}: GenericFormProps<T>) {
	const methods = useForm<T>({
		resolver: zodResolver(schema),
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
	}, [data, reset, defaultValues]);

	return (
		<FormProvider {...methods}>
			<Form
				noValidate
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(onSubmit)(e);
				}}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{columns.map(({ id, title, options, type }) => (
						<FormFieldComponent
							key={id}
							name={id}
							label={title}
							control={control}
							errors={errors}
						>
							{(() => {
								switch (type) {
									case "text":
										return <Input type="text" />;
									case "select":
										return <Select options={options || []} />;
									case "checkbox":
										return <Checkbox className="mt-2" />;
									default:
										return <Input type="text" />;
								}
							})()}
						</FormFieldComponent>
					))}
				</div>

				<div className="w-full flex justify-end mt-10">
					<SubmitButton isSubmitting={isSubmitting} label={submitLabel} />
				</div>
			</Form>
		</FormProvider>
	);
}
