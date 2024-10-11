"use server"
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
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
    console.log(email)
    try {
        const querySnapshot = await getDocs(query(itemRef, where("email","==", email)))

        if(!querySnapshot.empty){
            const appointments = [];
            querySnapshot.forEach((doc) => {
                appointments.push(doc.data().appointmentDate.toDate()); // Push each document data to the array
            });
            return appointments;
        }else{
        }

    } catch (error) {
        return error
    }
    
}

export async function bookAppointmentInDB(data){

    const itemRef = collection(db, `appointments/`)
    try{
        const querySnapshot = await getDocs(query(itemRef, where("email" , "==", data.email)))

        if(!querySnapshot.empty){
            return {message: "You Already Have An Appointment"}
        }else{
            await addDoc(collection(db, `appointments/`, ), data)
            return {message: "Appointment booked"}
        }


    }catch(error){
        return error
    }

}

export async function deleteCurrentAppointment(data) {
    const itemRef = collection(db, `appointments/`)
    try{
        // const querySnapshot = await getDocs(query(itemRef, where("email" , "==", data.email, where("appointmentDate", "==", data.appointmentDate))))
        const querySnapshot = await getDocs(query(itemRef, where("email" , "==", data.email)))
        
        if(!querySnapshot.empty){
            querySnapshot.forEach(async (file)=>{
                await deleteDoc(doc(db, `appointments/`, file.id))
                return true;
            })
        }else{
            return NaN
        }

    }catch(error){
        return error
    }
}
