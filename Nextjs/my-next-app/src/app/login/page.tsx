// app/login/page.tsx
"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Welcome, {session.user?.name}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  );
}
