/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useEffect, useState } from "react"
// import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import auth from "../../Firebase/firebase.config";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { auth } from "../../firebase/firebase.config";
export const AuthContext = createContext({});
type AuthProps = {
    children : React.ReactNode;
}
export default function AuthProvider({ children } : AuthProps) {
    // const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email : string, password : string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email : string, password : string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // const updateUserProfile = (name : string) => {
    //     return updateProfile(auth.currentUser , {
    //         displayName: name,
    //         //  photoURL: image
    //     })
    // }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>  {
            setUser(currentUser);
        })
        return () => {
            return unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
