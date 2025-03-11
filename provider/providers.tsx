"use client";

import { useThemeStore } from "@/store";
import { ThemeProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import { useMemo, useEffect, useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
	const [hydrated, setHydrated] = useState(false);
	const pathname = usePathname();
	const { theme, radius } = useThemeStore();

	useEffect(() => {
		setHydrated(true);
	}, []);

	const isHome = useMemo(() => pathname === "/", [pathname]);

	if (!hydrated) return <div className="opacity-0">Carregando...</div>;

	return (
		<ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
			<div className={cn("h-full")} style={{ "--radius": `${radius}rem` } as React.CSSProperties}>
				{children}
				{isHome && <ProgressBar height="3px" color="#06bda4" options={{ showSpinner: false }} shallowRouting />}
				<Toaster />
			</div>
		</ThemeProvider>
	);
};

export default Providers;
