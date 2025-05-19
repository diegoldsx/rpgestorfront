import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      permissions?: {
        route: string;
        level: "read" | "edit" | "admin";
      }[];
    }
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    permissions?: {
      route: string;
      level: "read" | "edit" | "admin";
    }[];
  }

  interface JWT {
    id?: string
    permissions?: {
      route: string;
      level: "read" | "edit" | "admin";
    }[];
  }
}
