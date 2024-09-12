import { Logout } from "@/actions/authServer";
import { auth } from "@firebase";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  return (
    <div>
      {auth.currentUser ? (
        <div>
          Hello welcome to venus canada {auth.currentUser?.displayName}
          <form action={Logout}>
            <button type="submit">Log-Out</button>
          </form>
        </div>
      ) : (
        <div>Not Logged In</div>
      )}
    </div>
  );
}

export default page;
