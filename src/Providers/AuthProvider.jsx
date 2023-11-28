/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase.init";
import useAxiousPublic from "../Hooks/useAxiousPublic";

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null)
    const auth = getAuth(firebaseApp)
    const axiousPublic = useAxiousPublic();

    const googleProvider = new GoogleAuthProvider();

    const createUserWithPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInWithPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
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
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });
        return () => {
            unSubcribe()
        }
    }, [auth, axiousPublic])

    const value = {
        loading,
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