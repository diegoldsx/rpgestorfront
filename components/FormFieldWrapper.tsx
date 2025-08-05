// components/form/FormFieldWrapper.tsx
import React from "react";
import { FieldError } from "react-hook-form";

interface Props {
	id: string;
	label: string;
	children: React.ReactNode;
	error?: FieldError;
	description?: string;
}

export function FormFieldWrapper({ id, label, children, error, description }: Props) {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className="text-sm font-medium text-gray-700">
				{label}
			</label>

			{children}

			{description && !error && <span className="text-xs text-gray-500">{description}</span>}

			{error && <span className="text-xs text-red-500">{error.message}</span>}
		</div>
	);
}
