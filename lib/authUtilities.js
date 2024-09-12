import {auth} from "@/lib/firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut  } from "firebase/auth"

export const registerUser = async (email, password)=>{
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        //Signed Up
        const user = userCredential.user
    }).catch((err)=>{
        throw new Error(err)
    })
}

export const loginUser = async (email, password)=>{
    await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        //Signed In
        const user = userCredential.user
    }).catch((error)=>{
        throw new Error(error)
    })
}

export const logOutUser = async ()=>{
    signOut(auth).then(()=>{
        return true
    }).catch((error)=>{
        throw new Error(error)
    })
}