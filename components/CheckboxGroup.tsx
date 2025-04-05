// components/ui/checkbox-group.tsx

"use client";

import * as React from "react";

interface CheckboxGroupProps {
	name: string;
	options: { label: string; value: string }[];
	value: string[];
	onChange: (value: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	name,
	options,
	value,
	onChange,
}) => {
	const handleChange = (val: string) => {
		if (value.includes(val)) {
			onChange(value.filter((v) => v !== val));
		} else {
			onChange([...value, val]);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			{options.map((option) => (
				<label key={option.value} className="flex items-center gap-2">
					<input
						type="checkbox"
						name={name}
						checked={value.includes(option.value)}
						onChange={() => handleChange(option.value)}
					/>
					<span>{option.label}</span>
				</label>
			))}
		</div>
	);
};
