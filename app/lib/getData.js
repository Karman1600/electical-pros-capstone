import { collection, query,  onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export default async function getUserData(onChange, uid, collectionName) {
  try {
    const q = query(collection(db, "users",uid,collectionName));
    onSnapshot(q,(stack) => {
      const stacks = stack.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      onChange(stacks);
    });
  } catch (error) {
    console.error("Error getting information: ", error);
    onChange([]);
  }
}
