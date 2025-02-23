"use client";
import { Inter } from "next/font/google";
import { useThemeStore } from "@/store";
import { ThemeProvider } from "next-themes";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { cn } from "@/lib/utils";
import { Toaster as ReactToaster } from "@/components/ui/toaster";
import { Toaster } from "react-hot-toast";
import { SonnToaster } from "@/components/ui/sonner";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const Providers = ({ children }: { children: React.ReactNode }) => {
	const { theme, radius } = useThemeStore();
	const location = usePathname();

	if (location === "/") {
		return (
			<body className={cn("rpgestor-app ", inter.className)}>
				<ThemeProvider
					attribute="class"
					enableSystem={false}
					defaultTheme="light"
				>
					<div className={cn("h-full  ")}>
						{children}
						<ProgressBar
							height="3px"
							color="#06bda4"
							options={{ showSpinner: false }}
							shallowRouting
						/>
						<ReactToaster />
					</div>
					<Toaster />
					<SonnToaster />
				</ThemeProvider>
			</body>
		);
	}
	return (
		<body
			className={cn("rpgestor-app ", inter.className, "theme-" + theme)}
			style={
				{
					"--radius": `${radius}rem`,
				} as React.CSSProperties
			}
		>
			<ThemeProvider
				attribute="class"
				enableSystem={false}
				defaultTheme="light"
			>
				<div className={cn("h-full  ")}>
					{children}
					<ReactToaster />
				</div>
				<Toaster />
				<SonnToaster />
			</ThemeProvider>
		</body>
	);
};

export default Providers;
