import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ]
})

export {handler as GET, handler as POST};


// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET
//       }),
//     // ...add more providers here
//   ],   
// }

// export default NextAuth(authOptions)