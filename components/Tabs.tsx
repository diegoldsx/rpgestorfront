import * as TabsPrimitive from "@radix-ui/react-tabs";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type TabsProps = { defaultValue?: string; children: ReactNode };
type TabListProps = { children: ReactNode };
type TabProps = { value: string; icon: LucideIcon; children: ReactNode };
type TabPanelProps = { value: string; children: ReactNode };

export const Tabs = ({ defaultValue, children }: TabsProps) => (
	<TabsPrimitive.Root className="bg-transparent" defaultValue={defaultValue}>
		{children}
	</TabsPrimitive.Root>
);

export const TabList = ({ children }: TabListProps) => (
	<TabsPrimitive.List className="flex gap-8 bg-transparent text-slate-500 border-b border-slate-200">
		{children}
	</TabsPrimitive.List>
);

export const Tab = ({ value, icon: Icon, children }: TabProps) => (
	<TabsPrimitive.Trigger
		value={value}
		className="flex items-center p-2 border-b-2 border-transparent text-gray-300 hover:text-gray-500 data-[state=active]:border-b-2 data-[state=active]:border-stone-400 data-[state=active]:text-stone-600 data-[state=active]: rounded-t"
	>
		<Icon className="mr-2 h-5 w-5" />
		{children}
	</TabsPrimitive.Trigger>
);

export const TabPanel = ({ value, children }: TabPanelProps) => (
	<TabsPrimitive.Content value={value} className="p-4 bg-transparent">
		{children}
	</TabsPrimitive.Content>
);
