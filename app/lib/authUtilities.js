import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const setUserData = async (uid, role, name, email) => {
  try {
    await setDoc(doc(db, "users", uid), { name: name, email: email, role: role, userID: uid });
    console.log("User set to", role);
  } catch (error) {
    console.log(error);
  }
};

export const getUserRole = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  if (userDoc.exists) {
    return userDoc.data().role;
  } else {
    throw new Error("No user found");
  }
};


export const registerUser = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed Up
      const user = userCredential.user;
      updateProfile(user, { displayName: name, name: name });
      setUserData(user.uid, "client", name, email);
    })
    .catch((err) => {
      console.log("Error signing up and setting role", err);
    });
};

export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed In
      const user = userCredential.user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const logOutUser = async () => {
  signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
