import { getAuthenticatedUser, updateAuthenticatedUser, getUserProfileInfo } from '@/app/action/user'
import { PageLayout } from '@/components/common/page/PageLayout'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { revalidatePath } from 'next/cache'
import { User, Mail, Phone, MapPin, Settings, Camera, LucideIcon } from 'lucide-react'
import { HeadingPages } from '@/components/common/heading/heading-pages'

// Componente para campo de input
interface FormFieldProps {
	id: string
	label: string
	name: string
	type?: string
	defaultValue?: string
	placeholder: string
	className?: string
}

function FormField({ id, label, name, type = 'text', defaultValue, placeholder, className }: FormFieldProps) {
	return (
		<div className={`space-y-2 ${className}`}>
			<Label htmlFor={id}>{label}</Label>
			<Input
				id={id}
				type={type}
				name={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
			/>
		</div>
	)
}

interface FormSectionProps {
	icon: LucideIcon
	title: string
	description: string
	children: React.ReactNode
}

function FormSection({ icon: Icon, title, description, children }: FormSectionProps) {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center space-x-2">
					<Icon className="h-5 w-5" />
					<CardTitle>{title}</CardTitle>
				</div>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				{children}
			</CardContent>
		</Card>
	)
}

interface ProfileHeaderProps {
	profile: {
		name: string
		username: string
		status: string
		image?: string
	}
}

function ProfileHeader({ profile }: ProfileHeaderProps) {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center space-x-6">
					<div className="relative">
						<Avatar className="h-24 w-24">
							<AvatarImage src={profile.image} alt={profile.name} />
							<AvatarFallback className="text-2xl">
								{profile.name?.charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<Button
							size="icon"
							className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
						>
							<Camera className="h-4 w-4" />
						</Button>
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-3 mb-2">
							<CardTitle className="text-3xl">{profile.name}</CardTitle>
							<Badge>@{profile.username}</Badge>
						</div>
						<CardDescription className="text-base">
							{profile.status}
						</CardDescription>
					</div>
				</div>
			</CardHeader>
		</Card>
	)
}

// Componente principal
export default async function ProfilePage() {
	const user = await getAuthenticatedUser()
	const profile = await getUserProfileInfo("1") // ou user.id

	async function handleSubmit(formData: FormData) {
		'use server'
		const name = formData.get('name') as string
		const email = formData.get('email') as string
		const image = formData.get("image") as string

		await updateAuthenticatedUser({ name, email, image })
		revalidatePath('/profile')
	}

	return (
		<PageLayout>
			<div className="min-h-screen bg-background py-8">
				<HeadingPages
					title={"Perfil de usuário"}
					breadcrumbs={{
						title: "Perfil",
						href: "/profile",
					}}
				/>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
					<ProfileHeader profile={profile} />

					<form action={handleSubmit} className="space-y-8">
						<FormSection
							icon={User}
							title="Informações Pessoais"
							description="Gerencie suas informações básicas de perfil"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									id="name"
									label="Nome"
									name="name"
									defaultValue={profile.name}
									placeholder="Nome completo"
								/>
								<FormField
									id="email"
									label="Email"
									name="email"
									type="email"
									defaultValue={profile.email}
									placeholder="seu@email.com"
								/>
								<FormField
									id="username"
									label="Username"
									name="username"
									defaultValue={profile.username}
									placeholder="@username"
								/>
								<FormField
									id="documentNumber"
									label="CPF/CNPJ"
									name="documentNumber"
									defaultValue={profile.documentNumber}
									placeholder="000.000.000-00"
								/>
								<FormField
									id="status"
									label="Status"
									name="status"
									defaultValue={profile.status}
									placeholder="Seu status atual"
									className="md:col-span-2"
								/>
								<FormField
									id="redirectUrl"
									label="URL de Redirecionamento"
									name="redirectUrl"
									type="url"
									defaultValue={profile.redirectUrl}
									placeholder="https://seusite.com"
									className="md:col-span-2"
								/>
							</div>
						</FormSection>

						<FormSection
							icon={Phone}
							title="Informações de Contato"
							description="Atualize suas informações de contato"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									id="phone"
									label="Telefone"
									name="phone"
									defaultValue={profile.phone}
									placeholder="(11) 1234-5678"
								/>
								<FormField
									id="mobile"
									label="Celular"
									name="mobile"
									defaultValue={profile.mobile}
									placeholder="(11) 99999-9999"
								/>
							</div>
						</FormSection>

						<FormSection
							icon={MapPin}
							title="Endereço"
							description="Mantenha seu endereço atualizado"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								<FormField
									id="zipCode"
									label="CEP"
									name="zipCode"
									defaultValue={profile.zipCode}
									placeholder="00000-000"
								/>
								<FormField
									id="street"
									label="Rua"
									name="street"
									defaultValue={profile.street}
									placeholder="Nome da rua"
									className="md:col-span-2"
								/>
								<FormField
									id="number"
									label="Número"
									name="number"
									defaultValue={profile.number}
									placeholder="123"
								/>
								<FormField
									id="complement"
									label="Complemento"
									name="complement"
									defaultValue={profile.complement}
									placeholder="Apto 45"
								/>
								<FormField
									id="neighborhood"
									label="Bairro"
									name="neighborhood"
									defaultValue={profile.neighborhood}
									placeholder="Nome do bairro"
								/>
								<FormField
									id="state"
									label="Estado"
									name="state"
									defaultValue={profile.state}
									placeholder="SP"
								/>
								<FormField
									id="city"
									label="Cidade"
									name="city"
									defaultValue={profile.city}
									placeholder="São Paulo"
								/>
							</div>
						</FormSection>

						<FormSection
							icon={Settings}
							title="Configurações da Conta"
							description="Gerencie configurações avançadas do seu perfil"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									id="paymentGroup"
									label="Grupo de Pagamento"
									name="paymentGroup"
									defaultValue={profile.paymentGroup?.name}
									placeholder="Nome do grupo"
								/>
								<FormField
									id="password"
									label="Nova Senha"
									name="password"
									type="password"
									placeholder="Digite uma nova senha"
								/>
							</div>
						</FormSection>

						<Card>
							<CardContent className="pt-6">
								<Separator className="mb-6" />
								<div className="flex flex-col sm:flex-row gap-4 justify-end">
									<Button variant="outline" type="button">
										Cancelar
									</Button>
									<Button type="submit">
										Salvar Alterações
									</Button>
								</div>
							</CardContent>
						</Card>
					</form>
				</div>
			</div>
		</PageLayout>
	)
}
