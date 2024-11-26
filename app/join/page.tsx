"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function Page() {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) return router.push("/join/sign-in");
  return (
    <>
      <h1 className="text-3xl font-bold underline">Join</h1>
    </>
  );
}
