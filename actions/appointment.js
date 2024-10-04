"use server"

import { bookAppointmentInDB, checkAppointmentFromDB } from "@/lib/firestoreFunctions";

export async function checkAppointment(formData) {
    const name = formData.name
    const email = formData.email
    const date = formData.date

    const dt = new Date(date)

    const utcTime = dt.getTime()
    const currentOffset = dt.getTimezoneOffset()/60;
    const newTime = new Date(utcTime + (-6 - currentOffset) * 60 * 60 * 1000 )

    console.log(newTime)

    const response = await checkAppointmentFromDB(dt);

    if(response == false){
        return {message: "Not available"}
    }else if(response == true){
        return {message: "Available"}
    }
}

export async function bookAppointment(date) {
    const dt = new Date(date)

    const utcTime = dt.getTime()
    const currentOffset = dt.getTimezoneOffset()/60;
    const newTime = new Date(utcTime + (-6 - currentOffset) * 60 * 60 * 1000 )

    try{

        const response = await bookAppointmentInDB(newTime);
        console.log(response)
    }catch(err){
        return err;
    }

    return true;

}