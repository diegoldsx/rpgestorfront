"use client";

import InputMask from "react-input-mask";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";

interface MaskedInputProps {
	label: string;
	name: string;
	mask: string;
	placeholder?: string;
	control: any;
	rules?: object;
}

export default function MaskedInput({
	label,
	name,
	mask,
	placeholder,
	control,
	rules,
}: MaskedInputProps) {
	return (
		<div>
			<Label htmlFor={name}>{label}</Label>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field }) => (
					<InputMask
						{...field}
						mask={mask}
						className="border border-gray-300 rounded-md p-2 w-full"
						placeholder={placeholder}
					/>
				)}
			/>
		</div>
	);
}
