"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

interface CheckboxProps {
	checked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	disabled?: boolean;
	className?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
	({ checked = false, onCheckedChange, disabled, className = "" }, ref) => (
		<CheckboxPrimitive.Root
			ref={ref}
			checked={checked}
			onCheckedChange={(val) => {
				if (typeof val === "boolean" && onCheckedChange) {
					onCheckedChange(val);
				}
			}}
			disabled={disabled}
			className={`w-5 h-5 border border-gray-400 rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:text-white focus:outline-none focus:ring-0 ${
				disabled ? "cursor-default" : "cursor-pointer"
			} ${className}`}
		>
			<CheckboxPrimitive.Indicator>
				<CheckIcon className="w-4 h-4" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
);

Checkbox.displayName = "Checkbox";
