"use server"
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./firebase";
import { NextResponse } from "next/server";

export async function checkAppointmentFromDB(data) {



    const itemRef = collection(db, `appointments/`)
    
    try {
        const querySnapshot = await getDocs(query(itemRef, where("appointmentDate","==", data.appointmentDate)))

        if(!querySnapshot.empty){
            return false
        }else{
            return true
        }

    } catch (error) {
        return error
    }
    
}

export async function fetchAppointmentDate(email) {

    const itemRef = collection(db, `appointments/`)
    
    try {
        const querySnapshot = await getDocs(query(itemRef, where("email","==", email)))

        if(!querySnapshot.empty){
            const appointments = [];
            querySnapshot.forEach((doc) => {
                appointments.push(doc.data()); // Push each document data to the array
            });
            return appointments;
        }else{
            return "No Appointments"
        }

    } catch (error) {
        return error
    }
    
}

export async function bookAppointmentInDB(data){
    try{
        await addDoc(collection(db, `appointments/`, ), data)
        return {message: "Appointment booked"}
    }catch(error){
        return error
    }

}
