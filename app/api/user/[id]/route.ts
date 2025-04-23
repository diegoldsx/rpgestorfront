import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.id !== params.id) {
    return new Response("Unauthorized", { status: 401 })
  }

  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email
  }

  return Response.json(user)
}
