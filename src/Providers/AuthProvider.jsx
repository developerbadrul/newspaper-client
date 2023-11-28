/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase.init";
import useAxiousPublic from "../Hooks/useAxiousPublic";

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const auth = getAuth(firebaseApp)
    const axiousPublic = useAxiousPublic();

    const googleProvider = new GoogleAuthProvider();

    const createUserWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, user => {
            console.log("current user", user);
            setCurrentUser(user)
            if (user) {
                const userInfo = { email: user.email }
                axiousPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                        }
                        else {
                            localStorage.removeItem("access-token")
                        }
                    })
            }
        });
        return () => {
            unSubcribe()
        }
    }, [auth, axiousPublic])

    const value = {
        currentUser,
        createUserWithPassword,
        singInWithPassword,
        googleSignIn,
        logOut
    }
    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;