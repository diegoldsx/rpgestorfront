"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

interface DateRange {
	from?: Date;
	to?: Date;
}

interface DatePickerRangeProps extends React.HTMLAttributes<HTMLDivElement> {
	name?: string;
	label?: string;
	placeholder?: string;
	selectedRange?: DateRange;
	onRangeChange?: (range: DateRange) => void;
	displayFormat?: string;
}

export const DatePickerRange = React.forwardRef<HTMLDivElement, DatePickerRangeProps>(
	(
		{
			name,
			label,
			placeholder = "Selecione um intervalo",
			selectedRange,
			onRangeChange,
			displayFormat = "dd/MM/yyyy",
			...rest
		},
		ref
	) => {
		const [range, setRange] = React.useState<DateRange>(selectedRange || {});
		const [open, setOpen] = React.useState(false);

		const handleDateChange = (newRange: DateRange | undefined) => {
			const updatedRange = newRange || {};
			setRange(updatedRange);

			if (onRangeChange) {
				onRangeChange(updatedRange);
			}

			if (updatedRange.from && updatedRange.to) {
				console.log("startDate:", updatedRange.from);
				console.log("endDate:", updatedRange.to);
				setOpen(false);
			}
		};

		const displayText =
			range.from && range.to
				? `${format(range.from, displayFormat)} - ${format(range.to, displayFormat)}`
				: placeholder;

		return (
			<div ref={ref} {...rest}>
				{label && <Label>{label}</Label>}
				{name && (
					<input
						type="hidden"
						name={name}
						value={range.from && range.to ? `${range.from.toISOString()}|${range.to.toISOString()}` : ""}
						readOnly
					/>
				)}
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="w-full h-9 justify-between border-default-300 text-left font-normal text-black hover:bg-transparent"
						>
							<div className="flex items-center gap-4 text-default-600">
								<CalendarIcon className="w-5 h-4 text-muted-foreground" />
								{displayText}
							</div>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar className="text-bold" mode="range" selected={range} onSelect={handleDateChange} initialFocus />
					</PopoverContent>
				</Popover>
			</div>
		);
	}
);

DatePickerRange.displayName = "DatePickerRange";
