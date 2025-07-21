// app/actions/members.ts
'use server'

import { fakeMembers } from '@/types/Member'

export async function getMembersReport() {
  const active = fakeMembers.filter(member => member.status === "active").length
  const inactive = fakeMembers.filter(member => member.status === "inactive").length
  const pending = fakeMembers.filter(member => member.status === "pending").length

  return [
    { status: "Ativo", count: 150 },
    { status: "Inativo", count: 25 },
    { status: "Pendente", count: 10 }
  ]
}
