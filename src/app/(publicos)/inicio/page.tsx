import { getServerSession } from "next-auth"
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route"

export default async function Início() {
   const session = await getServerSession(nextAuthOptions )
  return (
    <div>Olá     {session?.user.name}     com o número de identificação : {session?.user.id}  email  : {session?.user.email}      tipo :    {session?.user.tipo}      seja bem vindo!</div>
  )
}
