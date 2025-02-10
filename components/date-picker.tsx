"use client";

import * as React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

interface DatePickerProps {
	name: string;
	label?: string;
	placeholder?: string;
	selectedDate?: Date;
	onDateChange?: (date: Date | undefined) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
	name,
	label,
	placeholder = "Selecione uma data",
	selectedDate,
	onDateChange,
}) => {
	const [internalDate, setInternalDate] = React.useState<Date | undefined>(
		selectedDate
	);

	const handleDateChange = (date: Date | undefined) => {
		setInternalDate(date);
		if (onDateChange) {
			onDateChange(date);
		}
	};

	return (
		<div className="space-y-2">
			{label && <Label htmlFor={name}>{label}</Label>}
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline" className="w-full justify-between">
						{internalDate ? format(internalDate, "dd/MM/yyyy") : placeholder}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={internalDate}
						onSelect={handleDateChange}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};
