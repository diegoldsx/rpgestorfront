"use client";

import * as React from "react";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

interface SelectFieldProps {
	label?: string;
	name?: string;
	control?: any; // Control do React Hook Form
	options?: { value: string; label: string }[]; // Lista de opções
	placeholder?: string;
	rules?: object; // Regras de validação (React Hook Form)
}

export default function SelectField({
	label,
	name,
	control,
	options,
	placeholder = "Selecione...",
	rules,
}: SelectFieldProps) {
	return (
		<div className="space-y-2">
			<Label htmlFor={name}>{label}</Label>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field, fieldState: { error } }) => (
					<>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<SelectTrigger className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
							<SelectContent>
								{options.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{error && (
							<p className="text-red-500 text-sm mt-1">{error.message}</p>
						)}
					</>
				)}
			/>
		</div>
	);
}
