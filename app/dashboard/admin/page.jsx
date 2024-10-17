"use client";
import { useUserAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function adminPage() {
  const { user, SignOut } = useUserAuth();

  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      if (user) {
      } else {
        router.push("/sign-in");
      }
    };
    checkUserLoggedIn();
  }, [user]);

  return (
    <div>
      adminPage
      <form action={SignOut}>
        <button type="submit" className="flex p-3 bg-red-400 m-2 rounded-2xl">
          Log Out
        </button>
      </form>
    </div>
  );
}

export default adminPage;
