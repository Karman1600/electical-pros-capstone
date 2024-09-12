"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { redirect } from "next/navigation";
/* Page.js doesn't contain any code because when you open the website,
it redirects to the page in sign-in folder. */

export default function Page() {
  return (
    <div>
      <Link href={"/sign-in"}>Sign-In</Link>
    </div>
  );
}
