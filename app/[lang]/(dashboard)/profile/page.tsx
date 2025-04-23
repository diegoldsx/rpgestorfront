import { getAuthenticatedUser, updateAuthenticatedUser } from '@/app/actions/user'
import { PageLayout } from '@/components/common/page/PageLayout'
import { revalidatePath } from 'next/cache'
import Image from 'next/image'

export default async function ProfilePage() {
	const user = await getAuthenticatedUser()
	console.log(user)
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

			<form action={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
				<input
					type="text"
					name="name"
					defaultValue={user.name}
					className="border p-2 w-full"
					placeholder="Nome"
				/>
				<input
					type="email"
					name="email"
					defaultValue={user.email}
					className="border p-2 w-full"
					placeholder="Email"
				/>

				<Image src={user?.image} alt="" />
				<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
					Salvar
				</button>
			</form>
		</PageLayout>
	)
}
