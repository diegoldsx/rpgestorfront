"use client";
import { useSession, signOut } from "next-auth/react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const ProfileInfo = () => {
	const { data: session } = useSession();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="cursor-pointer">
				<div className="flex items-center">
					{session?.user?.image ? (
						<Image
							src={session.user.image}
							alt={session.user.name ?? ""}
							width={36}
							height={36}
							className="rounded-full"
						/>
					) : (
						<div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
							<span className="text-lg font-medium text-primary">
								{session?.user?.name?.charAt(0) ?? "A"}
							</span>
						</div>
					)}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 p-0" align="end">
				<DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
					{session?.user?.image ? (
						<Image
							src={session.user.image}
							alt={session.user.name ?? ""}
							width={36}
							height={36}
							className="rounded-full"
						/>
					) : (
						<div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
							<span className="text-lg font-medium text-primary">
								{session?.user?.name?.charAt(0) ?? "A"}
							</span>
						</div>
					)}
					<div>
						<div className="text-sm font-medium text-default-800 capitalize">
							{session?.user?.name ?? "Associado"}
						</div>
						<div className="text-xs text-default-600">
							{/* {session?.user?.role ?? 'Membro'} */}
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuGroup>
					{[
						{
							name: "Meu Perfil",
							icon: "heroicons:user",
							href: "#",
						},
						{
							name: "Minhas Mensalidades",
							icon: "heroicons:banknotes",
							href: "#",
						},
						{
							name: "Meus Cursos",
							icon: "heroicons:academic-cap",
							href: "#",
						},
						{
							name: "Meus Eventos",
							icon: "heroicons:calendar",
							href: "/eventos/calendar",
						},
					].map((item, index) => (
						<Link
							href={item.href}
							key={`info-menu-${index}`}
							className="cursor-pointer"
						>
							<DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
								<Icon icon={item.icon} className="w-4 h-4" />
								{item.name}
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				//TODO: Add admin menu
				{session?.user && (
					<DropdownMenuGroup>
						<Link href="/admin/associados" className="cursor-pointer">
							<DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
								<Icon icon="heroicons:users" className="w-4 h-4" />
								Gestão de Associados
							</DropdownMenuItem>
						</Link>

						<DropdownMenuSub>
							<DropdownMenuSubTrigger className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background">
								<Icon icon="heroicons:cog-6-tooth" className="w-4 h-4" />
								Administração
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									{[
										{
											name: "Configurações",
											href: "/admin/configuracoes",
										},
										{
											name: "Relatórios",
											href: "/admin/relatorios",
										},
										{
											name: "Backup",
											href: "/admin/backup",
										},
									].map((item, index) => (
										<Link
											href={item.href}
											key={`admin-sub-${index}`}
											className="cursor-pointer"
										>
											<DropdownMenuItem className="text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
												{item.name}
											</DropdownMenuItem>
										</Link>
									))}
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
					</DropdownMenuGroup>
				)}
				<DropdownMenuItem
					onSelect={() => signOut()}
					className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize   px-3 dark:hover:bg-background cursor-pointer"
				>
					<Icon icon="heroicons:power" className="w-4 h-4" />
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ProfileInfo;
