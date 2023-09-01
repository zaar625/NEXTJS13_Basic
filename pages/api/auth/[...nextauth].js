import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
// import GithubProvider from "next-auth/providers/github"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        session:{jwt:true},
        async authorize(credentials, req) {
          console.log('credentials',credentials)
           const client = await connectToDatabase();

           const usersCollection = client.db().collection('users');

           const user = await usersCollection.findOne({email:credentials.email})

           if(!user) {
            client.close();
            throw new Error('No user Found!')
           }

           const isValid = await verifyPassword(credentials.password, user.password);

           if(!isValid) {
            client.close();
            throw new Error('Could not log you in')
           }
           
           client.close();
           
           return {email:user.email, };
          }
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)