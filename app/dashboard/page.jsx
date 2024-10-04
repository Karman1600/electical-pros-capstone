"use client";
import { Logout } from "@/actions/authServer";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavBar from "../_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useUserAuth } from "@/lib/auth-context";
import { fetchAppointmentDate } from "@/lib/firestoreFunctions";
import { Timestamp } from "firebase/firestore";

function page() {
  const [appointments, setAppointments] = useState();
  const [noAppointment, setNoAppointment] = useState(false);
  const { user, SignOut } = useUserAuth();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      if (user) {
        console.log("Logged IN");

        const data = await fetchAppointmentDate(user.email);
        const times = [];
        if (data) {
          data.map((time) => {
            times.push(time);
          });
        }else{
          setNoAppointment(true)
        }

        setAppointments(times);

        // If the user is logged in, call loadWeather to fetch weather data
      } else {
        // Handle the case where the user is not logged in
        console.log("User is not logged in");
      }
    };

    checkUserLoggedIn(); // Call the function to check user login status
  }, [user]);

  return (
    <div>
      {user ? (
        <div className="m-auto justify-center items-center flex flex-col mt-32">
          Hello welcome {auth?.currentUser?.displayName} to Electrical Pros
          <div className="px-10">
            <h2 className="">Your Booked Appointments</h2>
            {noAppointment? (<p className="text-sm text-center">No Booked Appointments</p>): ""}

            {appointments?.map((time) => {
              time.setDate(time.getDate())
              const timeN = time.toLocaleString();

              const newDate = new Date(time)
              newDate.setDate(newDate.getDate() + 1)

              return (
                <>
                  {newDate.toLocaleString()}
                  <br></br>
                </>
              );
            })}
          </div>
          <Link href="/dashboard/book">
            <div className="m-3 p-4 justify-center items-center flex flex-col gap-2 bg-slate-100 rounded-3xl">
              <Image
                src={"/calendar.svg"}
                height={100}
                width={100}
                alt="calender icon"
              />
              <p>Get an Appointment</p>
            </div>
          </Link>
          <form action={SignOut}>
            <button
              type="submit"
              className="flex p-3 bg-red-400 m-2 rounded-2xl"
            >
              Log Out
            </button>
          </form>
        </div>
      ) : (
        <div>{redirect("/sign-in")}Not Logged In</div>
      )}
    </div>
  );
}

export default page;
