"use client";

import * as React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
	name?: string;
	label?: string;
	placeholder?: string;
	selectedDate?: Date;
	onDateChange?: (date: Date | undefined) => void;
	displayFormat?: string;
}

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
	(
		{
			name,
			label,
			placeholder = "Selecione uma data",
			selectedDate,
			onDateChange,
			displayFormat = "dd/MM/yyyy",

			...rest
		},
		ref
	) => {
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
			<div ref={ref} {...rest}>
				{label && <Label>{label}</Label>}
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="w-full h-9 justify-between border-default-300 text-left font-normal text-black hover:bg-transparent"
						>
							<div className="flex items-center gap-4 text-default-600">
								<CalendarIcon className="w-5 h-4 text-muted-foreground" />
								{selectedDate
									? format(selectedDate, displayFormat)
									: placeholder}
							</div>
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
	}
);

DatePicker.displayName = "DatePicker";
