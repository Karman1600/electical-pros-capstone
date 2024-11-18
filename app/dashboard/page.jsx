"use client";
import { Logout } from "@/app/actions/authServer";
import { auth } from "@/app/lib/firebase";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavBar from "../_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useUserAuth } from "@/app/lib/auth-context";
import {
  deleteCurrentAppointment,
  fetchAppointmentDate,
} from "@/app/lib/firestoreFunctions";
import { Timestamp } from "firebase/firestore";
import { FaRegTrashCan } from "react-icons/fa6";
import { getUserRole } from "@/app/lib/authUtilities";

function page() {
  const [appointments, setAppointments] = useState();
  const [noAppointment, setNoAppointment] = useState(false);
  const { user, SignOut } = useUserAuth();

  const router = useRouter();

  const handleDeleteAppointment = async (data) => {
    const finalData = {
      email: user.email,
      appointmentDate: Timestamp.fromDate(data).toJSON(),
    };

    const response = await deleteCurrentAppointment(user?.uid);

    if (response) {
      setNoAppointment(true);
      setAppointments();
    }
  };

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      if (user) {
        const userRole = await getUserRole(user.uid);

        if (userRole != "client") {
          router.push("/dashboard/admin");
        }

        const data = await fetchAppointmentDate(user?.uid);
        const times = [];
        if (data) {
          data.map((time) => {
            times.push(time);
          });
        } else {
          setNoAppointment(true);
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
            {noAppointment ? (
              <p className="text-sm text-center">No Booked Appointments</p>
            ) : (
              ""
            )}

            {appointments?.map((time) => {
              time.setDate(time.getDate());
              const timeN = time.toLocaleString();

              const newDate = new Date(time);
              newDate.setDate(newDate.getDate() + 1);

              return (
                <>
                  {newDate.toLocaleString()}
                  <button onClick={() => handleDeleteAppointment(time)}>
                    <FaRegTrashCan />
                  </button>
                  <br></br>
                </>
              );
            })}
          </div>
          <div className="flex">
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
            <Link href="/dashboard/room">
              <div className="m-3 p-4 justify-center items-center flex flex-col gap-2 bg-slate-100 rounded-3xl">
                <Image
                  src={"/call.svg"}
                  height={100}
                  width={100}
                  alt="call icon"
                />
                <p>Connect to a Call</p>
              </div>
            </Link>
          </div>
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