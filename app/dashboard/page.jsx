import { Logout } from "@/actions/authServer";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";
import React from "react";
import NavBar from "../_components/Navbar";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>
      {auth.currentUser ? (
      <div className="m-auto justify-center items-center flex flex-col mt-32">
        Hello welcome {auth?.currentUser?.displayName} to Electrical Pros
        <Link href="/dashboard/book">
          <div className="m-3 p-4 justify-center items-center flex flex-col gap-2 bg-slate-100 rounded-3xl">
            <Image src={"/calendar.svg"} height={100} width={100} alt="calender icon" />
            <p>Get an Appointment</p>
          </div>
        </Link>
        <form action={Logout}>
          <button type="submit" className="flex p-3 bg-red-400 m-2 rounded-2xl">
            Log Out
          </button>
        </form>
      </div>
      ) : (
        
        <div>
          {redirect("/sign-in")}Not Logged In</div>
      )}
    </div>
  );
}

export default page;
