import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";

import { LoginFormClient } from "../../components";

export default function Login() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    window.location.replace("/cart");
    return null;
  }
  return (
    <>
      <LoginFormClient />
    </>
  );
}
