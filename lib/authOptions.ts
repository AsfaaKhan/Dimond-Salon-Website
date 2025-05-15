
// lib/authOptions.ts
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const users = [
  {
    id: "1",
    name: "Jane Doe",
    email: "asfaa@gmail.com",
    // Use a real bcrypt-hashed password in production
    password: "$2b$10$V7P7Mf/6g5/NB9YdqBqO0OBZf5eWZoG6wupnvDdOaGPpUojUQgZeK" // "password123"
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const user = users.find((u) => u.email === credentials.email);
        if (user && await compare(credentials.password, user.password)) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};
