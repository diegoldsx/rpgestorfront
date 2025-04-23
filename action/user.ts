'use server'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

type UpdateUserInput = {
  name: string
  email: string
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
  }

  return updatedUser
}
