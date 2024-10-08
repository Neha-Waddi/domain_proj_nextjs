import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import UserCredentials from "@/models/user";
import bcrypt from 'bcryptjs';
import { connectMongodb } from "@/lib/mongodb";

const authOptions={
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const { username, password } = credentials;

        try {
          await connectMongodb();
          const user = await UserCredentials.findOne({ username });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
            }
        })
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.name = user.name;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id;
        session.user.name = token.name;
        return session;
      },
    },

    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signin:"/login",
        signOut:"/",
    }
};

const handler=NextAuth(authOptions);
export { handler as GET, handler as POST };