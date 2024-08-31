import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!!,
      authorization: {
        params: {
          scope: 'openid profile email',
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) token.sub = user.id;
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) session.user.id = token.sub;
      return session;
    },
  },
  secret: process.env.NEXT_SECRECT,
};
