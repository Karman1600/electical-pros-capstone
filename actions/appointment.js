"use server";

import {
  bookAppointmentInDB,
  checkAppointmentFromDB,
} from "@/lib/firestoreFunctions";
import { Timestamp } from "firebase/firestore";

export async function checkAppointment(formData) {
  const name = formData.name;
  const email = formData.email;
  const date = formData.date;
  const time = formData.time;

  const dt = new Date(date);

  dt.setHours(time);
  dt.setMinutes("00");

  // const utcTime = dt.getTime()
  // const currentOffset = dt.getTimezoneOffset()/60;
  // const newTime = new Date(utcTime + (-6 - currentOffset) * 60 * 60 * 1000 )

  // console.log(newTime)

  const timestamp = Timestamp.fromDate(dt);
  const data = {
    name: name,
    email: email,
    appointmentDate: timestamp,
  };

  const response = await checkAppointmentFromDB(data);

  if (response == false) {
    return { message: "Not available" , color: false };
  } else if (response == true) {
    return { message: "Available" , color: true};
  }
}

export async function bookAppointment(formData, uid) {
  const name = formData.name;
  const email = formData.email;
  const date = formData.date;
  const time = formData.time;
  const dt = new Date(date);

  dt.setHours(time);
  dt.setMinutes("00");

  console.log(date, dt);

  const utcTime = dt.getTime();
  const currentOffset = dt.getTimezoneOffset() / 60;
  const newTime = new Date(utcTime + (-6 - currentOffset) * 60 * 60 * 1000);

  const timestamp = Timestamp.fromDate(dt);
  const data = {
    name: name,
    email: email,
    appointmentDate: timestamp,
  };

  console.log(timestamp.toString());
  console.log(dt.toString());

  try {
    const response = await bookAppointmentInDB(data, uid);
    return {response, status: true};

  } catch (err) {
    return err;
  }

}
