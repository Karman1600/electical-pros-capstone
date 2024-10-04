"use server"
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./firebase";

export async function checkAppointmentFromDB(date) {
    const itemRef = collection(db, `appointments/`)
    
    try {
        const querySnapshot = await getDocs(query(itemRef, where("date","==", date)))

        if(!querySnapshot.empty){
            return false
        }else{
            return true
        }

    } catch (error) {
        return error
    }
    
}

export async function bookAppointmentInDB(date){
    try{
        await addDoc(collection(db, `appointments/`, ), {appointment: date})
        return {message: "Appointment booked"}
    }catch(error){
        return error
    }

}