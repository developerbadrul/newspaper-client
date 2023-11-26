/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../firebase.init";

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const auth = getAuth(firebaseApp)

    const createUserWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, user => {
            console.log("current user", user);
            setCurrentUser(user)
        });
        return () => unSubcribe()
    }, [auth])

    const value = {
        currentUser,
        createUserWithPassword,
        logOut
    }
    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;