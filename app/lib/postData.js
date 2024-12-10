import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export default async function postData(uid,collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, "users",uid,collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}