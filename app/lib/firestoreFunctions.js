"use server";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function checkAppointmentFromDB(data) {
  const itemRef = collection(db, `users/`);

  const userIDs = [];
  let responseBool;
  try {
    const querySnapshot = await getDocs(itemRef);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((snap) => userIDs.push(snap.id));
    } else {
    }
  } catch (error) {
    return error;
  }

  for (const userId of userIDs) {
    const userRef = collection(db, `users/${userId}/appointment`);

    const querySnapshot = await getDocs(
      query(userRef, where("appointmentDate", "==", data.appointmentDate))
    );

    if (!querySnapshot.empty) {
      responseBool = false;
    } else {
      responseBool = true;
    }
  }

  return responseBool;
}

export async function fetchAppointmentDate(uid) {
  const itemRef = collection(db, `users/${uid}/appointment`);
  try {
    const querySnapshot = await getDocs(itemRef);

    if (!querySnapshot.empty) {
      const appointments = [];
      querySnapshot.forEach((doc) => {
        appointments.push(doc.data().appointmentDate.toDate()); // Push each document data to the array
      });
      return appointments;
    } else {
    }
  } catch (error) {
    return error
  }
}

export async function bookAppointmentInDB(data, uid) {
  const itemRef = collection(db, `users/${uid}/appointment`);
  try {
    const querySnapshot = await getDocs(itemRef);

    if (!querySnapshot.empty) {
      return { message: "You Already Have An Appointment" };
    } else {
      await addDoc(itemRef, { appointmentDate: data.appointmentDate });
      return { message: "Appointment booked" };
    }
  } catch (error) {
    return error;
  }
}

export async function deleteCurrentAppointment(uid) {
  const itemRef = collection(db, `users/${uid}/appointment`);
  try {
    // const querySnapshot = await getDocs(query(itemRef, where("email" , "==", data.email, where("appointmentDate", "==", data.appointmentDate))))
    const querySnapshot = await getDocs(itemRef);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (file) => {
        await deleteDoc(doc(db, `users/${uid}/appointment`, file.id));
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
}

export async function fetchAllUsers() {
  const collRef = collection(db, "users/");
  const usersArray = [];
  try {
    const querySnapshot = await getDocs(collRef);
    if (!querySnapshot.empty) {
      for (const doc of querySnapshot.docs) {
        const data = [];
        if (doc.data().role === "client") {
          data.push(doc.data());
        }
        const appointmentData = await getDocs(
          collection(db, `users/${doc.id}/appointment/`)
        );
        if (!appointmentData.empty) {
          appointmentData.forEach((appointment) => {
            data.push(appointment.data());
          });
        }
        usersArray.push(data);
      }

      // querySnapshot.forEach((doc) => {
      //   const data = []
      //   // data.push(doc.data())
      //   // const appointmentData = await getDocs(collection(db, `users/${doc.id}/appointment/`))
      //   // if(!appointmentData.empty){
      //   //   appointmentData.forEach((appointment)=>{
      //   //     data.push(appointment.data())
      //   //   })
      //   // }
      //   usersArray.push(doc.data());
      // });
      return usersArray;
    }
  } catch (err) {
    console.log(err);
  }
}
