import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from '../../../../libs/prisma'
import bcrypt from 'bcrypt'
import { signIn } from "next-auth/react";

const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const userGet = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!userGet) throw new Error("Usuário não encontrado");

        const matchPass = await bcrypt.compare(
          credentials.password,
          userGet.password
        );

        if (!matchPass) {
          console.log("senhas incorreta");
          throw new Error("A Senha Está Incorreta");
        }

        return {
          id: userGet.id,
          name: userGet.name,
          email: userGet.email,
          userImage: userGet.userImage,
          tipo: userGet.tipo,
          status: userGet.status
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },


  callbacks: {
   async jwt({token, userGet}){
       userGet && (token.userGet = userGet) 
       return token
  },
  async Session({ session, token }){
      session = token.userGet 
      return session

  }
}
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
