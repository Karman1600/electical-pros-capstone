"use client";
import { useUserAuth } from "@/lib/auth-context";
import { getUserRole } from "@/lib/authUtilities";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import AppointmentTable from "./_components/AppointmentTable";
import Link from "next/link";

function adminPage() {
  const { user, SignOut } = useUserAuth();

  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      if (user) {
        const userRole = await getUserRole(user.uid);

        if (userRole != "client") {
        } else {
          router.push("/dashboard");
        }
      } else {
        router.push("/sign-in");
      }
    };
    checkUserLoggedIn();
  }, [user]);

  return (
    <div className="m-auto justify-center items-center flex flex-col mt-32">
      <Link href={"/dashboard/admin/createAppointment"}>
        <button className=" mx-auto text-white bg-blue-500 p-4 my-5 rounded-2xl drop-shadow-lg transition-all duration-200 hover:text-black hover:bg-slate-500 ">
          Manually Add
        </button>
      </Link>
      <AppointmentTable />
      <form action={SignOut}>
        <button type="submit" className="flex p-3 bg-red-400 m-2 rounded-2xl">
          Log Out
        </button>
      </form>
    </div>
  );
}

export default adminPage;
