export const options = {
	permissions: [
		{ value: "admin", label: "Administrador" },
		{ value: "user", label: "Usuário" },
		{ value: "guest", label: "Convidado" },
	],
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
	role: [
		{ value: "financial", label: "Financeiro" },
		{ value: "announcements", label: "Anúncios" },
		{ value: "support", label: "Suporte" },
		{ value: "user", label: "Usuário" },
		{ value: "event", label: "Evento" },
		{ value: "schedule", label: "Agenda" },
		{ value: "memberAccess", label: "Acesso de Membro" },
		{ value: "client", label: "Cliente" },
		{ value: "votingAssembly", label: "Assembleia de Votação" },
		{ value: "settings", label: "Configurações" },
		{ value: "member", label: "Membro" },
		{ value: "content", label: "Conteúdo" },
		{ value: "agreement", label: "Acordo" },
	],
} as const;
