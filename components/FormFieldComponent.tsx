"use client";

import React from "react";
import { Controller } from "react-hook-form";

interface FormFieldComponentProps {
	name: string;
	label: string;
	control: any;
	errors: any;
	children: React.ReactElement;
	placeholder?: string;
}

export const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
	name,
	label,
	control,
	errors,
	children,
	placeholder,
}) => {
	if (["id", "actions"].includes(name)) return null;

	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={name} className="font-medium text-sm">
				{label}
			</label>

			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					const type = children.type;
					const displayName = typeof type === "function" && "displayName" in type ? type.displayName : null;

					return React.cloneElement(children, {
						...field,
						id: name,
						placeholder,
						...(children.props?.type === "checkbox" || displayName === "Checkbox"
							? {
									checked: field.value,
									onCheckedChange: (val: boolean | "indeterminate") => {
										if (typeof val === "boolean") field.onChange(val);
									},
							  }
							: displayName === "DatePicker"
							? {
									selectedDate: field.value ? new Date(field.value) : undefined,
									onDateChange: (date: Date | undefined) => field.onChange(date ? date.toISOString() : ""),
							  }
							: {
									value: field.value,
									onChange: field.onChange,
							  }),
					});
				}}
			/>

			{errors[name]?.message && <span className="text-sm text-red-500">{errors[name].message}</span>}
		</div>
	);
};
