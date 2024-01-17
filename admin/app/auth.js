import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    console.log("Credentials:", credentials);

    const user = await User.findOne({ username: credentials.username });
    console.log("User:", user);

    if (!user || !user.isAdmin) {
      console.log("err");
      throw new Error("Wrong credentials!");
    }

    const isPasswordCorrect = credentials.password === user.password;

    console.log("Password Correct:", isPasswordCorrect);

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        try {
          console.log("usercccc", credentials);
          const user = await login(credentials);

          if (!user) {
            return null;
          }

          return user;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      console.log("token", token);
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
auth()
  .then((res) => console.log("ressssssssss", res))
  .catch((err) => console.log("err", err));
