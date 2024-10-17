"use client";
import {
  deleteCurrentAppointment,
  fetchAllUsers,
} from "@/lib/firestoreFunctions";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

function AppointmentTable() {
  const [userData, setUserData] = useState();

  const router = useRouter();

  const fetchAllAppointments = async () => {
    const data = await fetchAllUsers();
    setUserData(data);
  };

  const handleDeleteAppointment = async (uid) => {
    const response = await deleteCurrentAppointment(uid);
    router.push("/dashboard")
  };

  useEffect(() => {
    fetchAllAppointments();
  }, []);

  return (
    <div className="border-2 p-10">
      <table>
        <thead>
          <tr className=" w-full">
            <th className="text-xl w-full font-bold p-2">Name</th>
            <th className="text-xl w-full font-bold p-2">Email</th>
            <th className="text-xl w-full font-bold py-2 px-5">Appointment</th>
            <th className="text-xl w-full font-bold p-2">Actions</th>
          </tr>
        </thead>
        {userData?.map((data, x) => {
          if (data.length > 1) {
            const time = data[1].appointmentDate;

            const newDate = new Date(
              time.seconds * 1000 + time.nanoseconds / 1000000
            );
            newDate.setDate(newDate.getDate() + 1);

            return (
              <>
                <tbody>
                  <tr className="w-full">
                    <td className="text-center">{data[0]?.name}</td>
                    <td className="px-2">{data[0]?.email}</td>
                    <td className="px-5">{newDate.toDateString()}</td>
                    <td className="px-2">
                      <button
                        onClick={() => handleDeleteAppointment(data[0].userID)}
                      >
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          } else if (data.length = 1) {
            return (
              <>
                <tr className="w-full">
                  <td className="text-center">{data[0]?.name}</td>
                  <td className="px-2">{data[0]?.email}</td>
                  <td className="px-5">{ data[0]? `No Appointment Booked`: ""}</td>
                  <td className="px-2">{ data[0]? `No Actions` : ""}</td>
                </tr>
              </>
            );
          } else {
            return <></>;
          }
        })}
      </table>
    </div>
  );
}

export default AppointmentTable;
