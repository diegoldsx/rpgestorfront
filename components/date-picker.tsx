"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

type Modes = "single" | "multiple" | "range";

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
	name?: string;
	label?: string;
	placeholder?: string;
	selectedDate?: Date;
	onDateChange?: (date: Date | null) => void;
	displayFormat?: string;
	mode?: Modes;
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
			mode = "single",
			...rest
		},
		ref
	) => {
		const [internalDate, setInternalDate] = React.useState<Date | undefined>(selectedDate);
		const [open, setOpen] = React.useState(false);

		const handleDateChange = (date: Date | undefined) => {
			const newDate = date ?? null;
			setInternalDate(newDate ?? undefined);
			if (onDateChange) {
				onDateChange(newDate);
			}
			setOpen(false);
		};

		return (
			<div ref={ref} {...rest}>
				{label && <Label>{label}</Label>}
				{name && <input type="hidden" name={name} value={selectedDate ? selectedDate.toISOString() : ""} readOnly />}
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="w-full bg-white h-9 justify-between border-default-300 text-left font-normal text-black hover:bg-transparent"
						>
							<div className="flex items-center gap-4 text-default-600">
								<CalendarIcon className="w-5 h-4 text-muted-foreground" />
								{selectedDate ? format(selectedDate, displayFormat) : placeholder}
							</div>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							className="text-bold"
							mode={"single"}
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
