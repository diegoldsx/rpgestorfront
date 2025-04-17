function createTable(initialData: any) {
	let data = [...initialData];

	return {
		getAll: () => data,
		getById: (id: any) => data.find((item) => item.id === id),
		create: (newItem: any) => {
			data.push(newItem);
			return newItem;
		},
		update: (id: any, updatedItem: any) => {
			const index = data.findIndex((item) => item.id === id);
			if (index !== -1) {
				data[index] = { ...data[index], ...updatedItem };
				return data[index];
			}
			return null;
		},
		delete: (id: any) => {
			const index = data.findIndex((item) => item.id === id);
			if (index !== -1) {
				const deletedItem = data.splice(index, 1)[0];
				return deletedItem;
			}
			return null;
		},
		filter: (predicate: any) => data.filter(predicate),
	};
}

export const db = {
	assemblies: createTable([
		{
			id: "1",
			name: "Assembleia Geral",
			status: "active",
			startDate: "2024-01-15",
			endDate: "2024-01-20",
			type: "ordinaria",
			allowChangeVote: true,
			displayMode: "public",
			description: "Desc",
			videoConference: true,
		},
	]),
	contents: createTable([
		{
			id: "1",
			contentType: "content1",
			status: "active",
			title: "Nova Notícia",
			description: "Conteúdo da notícia.",
			responsible: "user1",
			videoConference: false,
			customHtml: "<p>HTML personalizado</p>",
			access: "public",
		},
	]),
	customers: createTable([
		{
			id: "1",
			name: "Cliente A",
			email: { id: "email-1", email: "cliente@email.com", status: "active" },
			customerType: "pf",
			cpf: "123.456.789-00",
			cnpj: "",
			phone: "11 1234-5678",
			mobile: "11 91234-5678",
			userPassword: "password123",
			registrationDate: "2024-01-01",
			status: "active",
			code: "C123",
			photo: "photo.jpg",
			zipCode: "01001-000",
			street: "Rua Exemplo",
			number: "123",
			neighborhood: "Centro",
			state: "SP",
			city: "São Paulo",
			corporateName: "",
			tradeName: "",
			billingEmail: "billing@email.com",
			billingName: "Nome Fatura",
			billingPhone: "11 9999-9999",
			billingMobile: "11 8888-8888",
		},
	]),
	emails: createTable([
		{ id: "1", email: "email2@email.com", status: "inactive" },
	]),
	emailMarketingMessages: createTable([
		{
			id: "1",
			email: "marketing@email.com",
			status: "active",
			group: { id: 1, name: "Grupo Marketing", total: "100" },
		},
	]),
	emailMarketingSectors: createTable([
		{
			id: "1",
			name: "Setor Marketing",
			benefits: "Benefícios",
			contact: "Contato",
			email: "setor@email.com",
			mobile: "11 91111-1111",
			phone: "11 1111-1111",
			local: "Local A",
			type: "tipo",
			status: "active",
		},
	]),
	events: createTable([
		{
			id: "1",
			category: { id: "ec-1", name: "Workshop", status: "active" },
			name: "Workshop A",
			eventStartDate: "2024-02-01",
			eventEndDate: "2024-02-02",
			registrationDeadline: "2024-01-25",
			participantLimit: 50,
			responsibles: ["user-1"],
			permission: "sale",
			value: 100,
			costCenter: "marketing",
			account: "12345",
			allowSubmission: false,
			status: "active",
		},
	]),
	eventSubmissions: createTable([
		{
			id: "1",
			packagingName: "Pacote A",
			strategicPartners: "Parceiros",
			area: "Area A",
			authors: "Autores",
			institution: "Instituição",
			date: "2024-02-10",
			event: "event-1",
			submitedBy: "user-1",
			packageReleaseDate: "2024-02-15",
			packageDesignAgency: "Agência",
			status: "active",
			presentationLink: "link",
			comments: "Comentários",
			number: 1,
			presentationDate: "2024-02-20",
			roomContent: "Conteúdo da sala",
		},
	]),
	eventCategories: createTable([
		{ id: "1", name: "Seminário", status: "inactive" },
	]),
	eventCourses: createTable([
		{
			id: "1",
			category: "Categoria Curso",
			name: "Curso A",
			startDate: "2024-03-01",
			endDate: "2024-03-05",
			registrationDeadline: "2024-02-25",
			participantLimit: 30,
			instructors: "Instrutores",
			description: "Descrição do curso",
			permissions: "permissões",
			value: 200,
			costCenter: "finance",
			billing: "billing",
			account: "67890",
			enrollment: "enrollment",
			paymentConfirmation: true,
			exemption: false,
			cancellation: false,
			inviteConfirmation: true,
			status: "active",
		},
	]),
	expenses: createTable([
		{
			id: "1",
			payer: "Fornecedor X",
			dueDate: "2024-01-31",
			category: "Aluguel",
			status: "active",
			paymentInfo: {
				account: "1234",
				paymentMethod: "boleto",
				costCenter: "administration",
			},
			taxInfo: {},
		},
	]),
	incomes: createTable([
		{
			id: "1",
			payer: "Cliente Y",
			description: "Venda de produto",
			dueDate: "2024-02-28",
			value: 500,
			paidValue: 500,
			status: "active",
			totalInstallments: "1",
			installmentType: "única",
			invoiceInstructions: "Instruções",
			sampleMessage: "Mensagem",
			paymentInfo: {
				account: "5678",
				paymentMethod: "transferencia",
				costCenter: "sales",
			},
		},
	]),
	instalments: createTable([
		{
			id: "1",
			chargeType: "cobrança",
			group: "Grupo Cobrança",
			dueDate: "2024-03-31",
			category: "Categoria",
			description: "Descrição",
			invoiceInstruction: "Instrução",
			paymentInfo: {
				account: "9012",
				paymentMethod: "cartao",
				costCenter: "finance",
			},
		},
	]),
	provisions: createTable([
		{
			id: "1",
			ammount: "1000",
			description: "Provisão",
			observations: "Observações",
		},
	]),
	remittances: createTable([
		{
			id: "1",
			bank: "itau",
			search: "busca",
			searchFor: "busca por",
			dataType: "due",
			type: "all",
		},
	]),
	returns: createTable([
		{ id: "1", account: "bradesco", filePath: "caminho/arquivo" },
	]),
	transfers: createTable([
		{
			id: "1",
			origin: "conta1",
			destination: "conta2",
			date: "2024-04-01",
			amount: "100",
		},
	]),
	members: createTable([
		{
			id: "1",
			email: "membro@email.com",
			name: "Membro A",
			financialStatus: "ativo",
			billingCycle: "mensal",
			paymentGroup: "grupo1",
			paymentMethod: "boleto",
			type: "tipo1",
			address: {
				zipCode: "02002-000",
				street: "Rua Membro",
				number: "456",
				neighborhood: "Bairro Membro",
				state: "RJ",
				city: "Rio de Janeiro",
			},
			document: { document: "documento" },
		},
	]),
	affiliations: createTable([
		{
			id: "1",
			name: "Afiliacao A",
			benefits: "Benefícios",
			contact: "Contato",
			email: "afiliacao@email.com",
			mobile: "21 92222-2222",
			category: { id: 1, name: "Categoria A", status: "active" },
			phone: "21 2222-2222",
			local: "Local B",
			status: "active",
		},
	]),
	affiliationCategories: createTable([
		{ id: "1", name: "Categoria B", status: "inactive" },
	]),
	affiliationDiscounts: createTable([
		{ id: "1", name: "Desconto A", status: "active" },
	]),
	affiliationPayments: createTable([
		{ id: "1", name: "Pagamento A", status: "active" },
	]),
	affiliationServices: createTable([
		{ id: "1", name: "Serviço A", status: "active" },
	]),
	affiliationTypes: createTable([
		{ id: "1", name: "Tipo A", status: "active" },
	]),
	serviceDesks: createTable([
		{
			id: "1",
			registration: "registro",
			document: "documento",
			member: "member-1",
			phone: "11 3333-3333",
			email: "servicedesk@email.com",
			company: "Empresa",
			sector: "setor1",
			local: "local1",
			appointmentDate: "2024-05-01",
			appointmentHour: "10:00",
			description: "Descrição do serviço",
		},
	]),
	users: createTable([
		{
			id: "1",
			name: "Usuário A",
			email: "usuario@email.com",
			status: "active",
			username: "usuario1",
		},
	]),
};
