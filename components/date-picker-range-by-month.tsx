"use client";

import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { format, setMonth, setYear } from "date-fns";
import Select from "@/components/Select";

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - 25 + i);

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	label?: string;
	onRangeSelect?: (range: { from: Date; to: Date }) => void;
}

export const DatePickerRangeByMonth = React.forwardRef<HTMLDivElement, Props>(
	({ label, onRangeSelect, ...rest }, ref) => {
		const [open, setOpen] = React.useState(false);
		const [fromMonth, setFromMonth] = React.useState<{ month: number; year: number } | null>(null);
		const [toMonth, setToMonth] = React.useState<{ month: number; year: number } | null>(null);

		const formatSelection = (m: { month: number; year: number } | null) =>
			m ? format(new Date(m.year, m.month), "MM/yyyy") : "";

		const confirmSelection = () => {
			if (!fromMonth || !toMonth) return;
			const from = setMonth(setYear(new Date(), fromMonth.year), fromMonth.month);
			const to = setMonth(setYear(new Date(), toMonth.year), toMonth.month);
			if (from > to) return;
			onRangeSelect?.({ from, to });
			console.log("startDate:", from);
			console.log("endDate:", to);
			setOpen(false);
		};

		const renderSelect = (value: string | undefined, onValueChange: (value: string) => void, options: string[]) => (
			<Select
				options={options.map((label, i) => ({ label, value: i.toString() }))}
				value={value}
				onChange={onValueChange}
				placeholder="Mês"
			/>
		);

		const renderYearSelect = (value: string | undefined, onValueChange: (value: string) => void) => (
			<Select
				options={years.map((year) => ({ label: year.toString(), value: year.toString() }))}
				value={value}
				onChange={onValueChange}
				placeholder="Ano"
			/>
		);

		return (
			<div ref={ref} {...rest}>
				{label && <Label className="mb-1 block text-sm font-medium">{label}</Label>}
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button variant="outline" className="w-full h-9 justify-between text-left">
							<div className="flex items-center gap-3">
								<CalendarIcon className="w-4 h-4 text-muted-foreground" />
								{fromMonth && toMonth
									? `${formatSelection(fromMonth)} - ${formatSelection(toMonth)}`
									: "Selecione um intervalo"}
							</div>
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-[400px] p-4 space-y-4 bg-white border rounded shadow z-50"
						align="start"
						side="bottom"
						sideOffset={5}
					>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label className="text-sm">De</Label>
								<div className="flex gap-2">
									{renderSelect(
										fromMonth?.month?.toString(),
										(v) =>
											setFromMonth((m) => ({
												month: +v,
												year: m?.year ?? currentYear,
											})),
										months
									)}
									{renderYearSelect(fromMonth?.year?.toString(), (v) =>
										setFromMonth((m) => ({
											year: +v,
											month: m?.month ?? 0,
										}))
									)}
								</div>
							</div>
							<div className="space-y-2">
								<Label className="text-sm">Até</Label>
								<div className="flex gap-2">
									{renderSelect(
										toMonth?.month?.toString(),
										(v) =>
											setToMonth((m) => ({
												month: +v,
												year: m?.year ?? currentYear,
											})),
										months
									)}
									{renderYearSelect(toMonth?.year?.toString(), (v) =>
										setToMonth((m) => ({
											year: +v,
											month: m?.month ?? 0,
										}))
									)}
								</div>
							</div>
						</div>
						<Button className="w-full mt-2" onClick={confirmSelection}>
							Confirmar intervalo
						</Button>
					</PopoverContent>
				</Popover>
			</div>
		);
	}
);

DatePickerRangeByMonth.displayName = "DatePickerRangeByMonth";
