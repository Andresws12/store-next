"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function SignInJoinLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user } = useAuth();

  if (user) return router.push("/");

  return <>{children}</>;
}
