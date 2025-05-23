import { ReactNode } from "react";
import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";
import { authOptions } from "@/lib/auth";
import { getServerSession, NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";
import { getDictionary } from "@/app/dictionaries";

export const metadata = {
	title: "Associados",
};

type LayoutProps = {
	children: ReactNode;
	params: { lang: "en" | "pt" };
};

const Layout = async ({ children, params: { lang } }: LayoutProps) => {
	const session = await getServerSession(authOptions as NextAuthOptions);

	if (!session?.user?.email) {
		redirect("/auth/login");
	}

	const trans = await getDictionary(lang);

	return (
		<DashBoardLayoutProvider trans={trans}>
			{children}
		</DashBoardLayoutProvider>
	);
};

export default Layout;
