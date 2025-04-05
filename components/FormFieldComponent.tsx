import React from "react";
import { Controller } from "react-hook-form";

interface FormFieldComponentProps {
	name: string;
	label: string;
	control: any;
	errors: any;
	children: React.ReactElement;
}

export const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
	name,
	label,
	control,
	errors,
	children,
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
				render={({ field }) =>
					React.cloneElement(children, {
						...field,
						id: name,
						...(children.props.type === "checkbox"
							? {
									checked: field.value,
									onChange: (val: boolean) => field.onChange(val),
							  }
							: {
									value: field.value,
									onChange: field.onChange,
							  }),
					})
				}
			/>

			{errors[name]?.message && (
				<span className="text-sm text-red-500">{errors[name].message}</span>
			)}
		</div>
	);
};
