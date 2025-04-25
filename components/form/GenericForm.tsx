"use client";

import React, { useEffect } from "react";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	FieldValues,
	Path,
	PathValue,
	DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import Select from "@/components/Select";
import { Checkbox } from "@/components/Checkbox";
import { DatePicker } from "@/components/date-picker";
import { Column, ColumnSchema } from "@/types/columns/ColumnsDefinition";
import { ColumnDef } from "@tanstack/react-table";

interface GenericFormProps<T extends FieldValues> {
	schema: ZodType<T>;
	defaultValues: DefaultValues<T>;
	columns: Column<T>[];
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
	}, [data, reset]);

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(onSubmit)(e);
				}}
				noValidate
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				{columns.map(({ id, title, type, options }) => {
					if (!["text", "select", "checkbox", "date"].includes(type))
						return null;

					let fieldComponent: React.ReactElement;

					switch (type) {
						case "text":
							fieldComponent = <Input type="text" />;
							break;
						case "select":
							fieldComponent = <Select options={options || []} />;
							break;
						case "checkbox":
							fieldComponent = (
								<Checkbox
									checked={methods.watch(id as Path<T>)}
									onCheckedChange={(val) => {
										if (typeof val === "boolean") {
											methods.setValue(
												id as Path<T>,
												val as PathValue<T, Path<T>>
											);
										}
									}}
								/>
							);
							break;
						case "date":
							fieldComponent = (
								<DatePicker
									displayFormat="dd/MM/yyyy"
									selectedDate={(() => {
										const value = methods.watch(id as Path<T>);
										if (!value) return undefined;
										const date = new Date(value as string);
										return isNaN(date.getTime()) ? undefined : date;
									})()}
									onDateChange={(date) =>
										methods.setValue(
											id as Path<T>,
											(date ? date.toISOString() : "") as PathValue<T, Path<T>>
										)
									}
								/>
							);
							break;
						default:
							return null;
					}

					return (
						<FormFieldComponent
							key={String(id)}
							name={String(id)}
							label={title}
							control={control}
							errors={errors}
						>
							{fieldComponent}
						</FormFieldComponent>
					);
				})}

				<div className="w-full md:col-span-2 flex justify-end mt-4">
					<SubmitButton isSubmitting={isSubmitting} label={submitLabel} />
				</div>
			</form>
		</FormProvider>
	);
}
