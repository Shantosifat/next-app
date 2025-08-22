"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-red-500 text-white rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
