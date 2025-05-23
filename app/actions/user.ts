'use server'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { fake_users } from '../[lang]/(dashboard)/users/types'
import { fakeUsers } from '@/types/User'

type UpdateUserInput = {
  name: string
  email: string
  image: string
}

export async function getAuthenticatedUser() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    throw new Error('Unauthorized')
  }

  return {
    id: session.user.id,
    name: session.user.name ?? '',
    email: session.user.email ?? '',
    image: session.user.image ?? '',
  }
}

export async function updateAuthenticatedUser(data: UpdateUserInput) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    throw new Error('Unauthorized')
  }

  // Aqui você atualizaria no banco — simulado abaixo:
  const updatedUser = {
    id: session.user.id,
    name: data.name,
    email: data.email,
    image: data.image
  }

  return updatedUser
}

export async function getUserProfileInfo(id: string) {
  const result = fakeUsers.find(user => user.id === id)


  if (!result) {
    throw new Error('Usuário não encontrado')
  }

  return result
}
