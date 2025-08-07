// components/GenericRadioGroup.tsx
import * as RadioGroupRadix from "@radix-ui/react-radio-group";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Option<T extends string> = { value: T; label: ReactNode };

type RadioGroupProps<T extends string> = {
	value: T;
	onValueChange: (value: T) => void;
	options: Option<T>[];
	disabledValues?: T[];
	name?: string;
	className?: string;
};

export function RadioGroup<T extends string>({
	value,
	onValueChange,
	options,
	disabledValues = [],
	name,
	className,
}: RadioGroupProps<T>) {
	return (
		<RadioGroupRadix.Root name={name} value={value} onValueChange={onValueChange} className={cn("flex", className)}>
			{options.map(({ value: v, label }) => (
				<RadioGroupRadix.Item
					key={v}
					value={v}
					disabled={disabledValues.includes(v)}
					className={cn(
						"flex items-center  gap-2  w-40 cursor-pointer",
						"disabled:opacity-50 disabled:cursor-not-allowed"
					)}
				>
					<div
						className={cn(
							"flex items-center justify-center h-4 w-4 outline rounded-full  ",
							"data-[state=checked]:border-blue-600"
						)}
					>
						<RadioGroupRadix.Indicator className="h-2 w-2 rounded-full bg-blue-600" />
					</div>
					<span className={cn(value === v ? "font-semibold text-gray-600" : "text-gray-700")}>{label}</span>
				</RadioGroupRadix.Item>
			))}
		</RadioGroupRadix.Root>
	);
}
