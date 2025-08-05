"use client";

import React, { useEffect, useMemo } from "react";
import {
	useForm,
	FormProvider,
	SubmitHandler,
	FieldValues,
	Path,
	PathValue,
	DefaultValues,
	useWatch,
	Controller,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { SelectComponent } from "@/components/SelectComponent";
import { Checkbox } from "@/components/Checkbox";
import { DatePicker } from "@/components/date-picker";
import { ColumnSchema } from "@/types/columns/ColumnsDefinition";

type FieldType = "text" | "select" | "checkbox" | "date";

export interface FormField<T> {
	id: Path<T>;
	title: string;
	type: FieldType;
	options?: { label: string; value: string }[];
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	description?: string;
}

interface GenericFormProps<T extends FieldValues> {
	schema: ZodType<T>;
	defaultValues: DefaultValues<T>;
	fields?: FormField<T>[];
	columns?: ColumnSchema<T>[];
	onSubmit: SubmitHandler<T>;
	data?: Partial<T>;
	submitLabel?: string;
}

export function GenericForm<T extends FieldValues>({
	schema,
	defaultValues,
	fields,
	columns,
	onSubmit,
	data,
	submitLabel = "Salvar",
}: GenericFormProps<T>) {
	const methods = useForm<T>({
		resolver: zodResolver(schema),
		defaultValues: { ...defaultValues, ...data },
	});

	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
		setValue,
		register,
	} = methods;

	const formFields = useMemo<FormField<T>[]>(() => {
		if (fields) return fields;
		if (!columns) return [];
		return columns.map((c) => ({
			id: c.id as Path<T>,
			title: c.title,
			type: c.type as FieldType,
			options: (c as any).options,
			placeholder: (c as any).placeholder,
			disabled: (c as any).disabled,
			readOnly: (c as any).readOnly,
			description: (c as any).description,
		}));
	}, [fields, columns]);

	useEffect(() => {
		if (data) reset((prev) => ({ ...prev, ...defaultValues, ...data }));
	}, [data, defaultValues, reset]);

	function safeParseDate(value?: string) {
		if (!value) return undefined;
		const d = new Date(value);
		return isNaN(d.getTime()) ? undefined : d;
	}

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(
					(d) => onSubmit(d),
					(errs) => console.warn("❌ FORM INVÁLIDO", errs)
				)}
				noValidate
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				{formFields.map(({ id, title, type, options, placeholder, disabled, readOnly, description }) => {
					let fieldComponent: React.ReactNode = null;
					switch (type) {
						case "text":
							fieldComponent = (
								<Input
									id={String(id)}
									{...register(id)}
									placeholder={placeholder}
									disabled={disabled}
									readOnly={readOnly}
								/>
							);
							break;
						case "select":
							fieldComponent = (
								<Controller
									name={id}
									control={control}
									render={({ field }) => (
										<SelectComponent
											value={field.value}
											onChange={field.onChange}
											options={options || []}
											disabled={disabled}
										/>
									)}
								/>
							);
							break;
						case "checkbox": {
							const checked = useWatch({ name: id as Path<T>, control });
							fieldComponent = (
								<Checkbox
									checked={checked}
									disabled={disabled}
									onCheckedChange={(v) => typeof v === "boolean" && setValue(id, v as PathValue<T, Path<T>>)}
								/>
							);
							break;
						}
						case "date": {
							const raw = useWatch({ name: id as Path<T>, control });
							fieldComponent = (
								<DatePicker
									displayFormat="dd/MM/yyyy"
									selectedDate={safeParseDate(raw as string)}
									onDateChange={(d) => setValue(id, (d ? d.toISOString() : "") as PathValue<T, Path<T>>)}
								/>
							);
							break;
						}
					}

					const error = errors[id as keyof typeof errors];

					return (
						<div key={String(id)} className="flex flex-col gap-1">
							<label htmlFor={String(id)} className="text-sm font-medium text-gray-700">
								{title}
							</label>

							{fieldComponent}

							{description && !error && <span className="text-xs text-gray-500">{description}</span>}
							{error && <span className="text-xs text-red-500">{(error as any).message}</span>}
						</div>
					);
				})}

				<div className="w-full md:col-span-2 flex justify-end mt-4">
					<SubmitButton isSubmitting={isSubmitting} label={submitLabel} />
				</div>
			</form>
		</FormProvider>
	);
}
