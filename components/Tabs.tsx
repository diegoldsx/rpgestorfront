"use client";

import { Tabs as TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ReactNode } from "react";

type TabsProps = {
	value: string;
	onValueChange?: (value: string) => void;
	children: ReactNode;
	className?: string;
};

export function Tabs({ value, onValueChange, children, className }: TabsProps) {
	return (
		<TabsRoot value={value} onValueChange={onValueChange} className={className}>
			{children}
		</TabsRoot>
	);
}
