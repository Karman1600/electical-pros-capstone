import { Logout } from "@/actions/authServer";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";
import React from "react";
import NavBar from "../_components/Navbar";

function page() {
  return (
    <div>
      {auth.currentUser ? (
        <div>
          Hello welcome to Electrical Pro {auth.currentUser?.displayName}
          <form action={Logout}>
            <button type="submit">Log-Out</button>
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
  