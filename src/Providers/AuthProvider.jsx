import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const updateInfo = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName, photoURL });
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            console.log("Current user: ", currentUser);
            if (currentUser) {
                axios.post('http://localhost:3000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("token response", res.data)
                    })
            }
            else {
                axios.post('http://localhost:3000/logout', loggedUser, {
                    withCredentials: true
                }).then(res => {
                    console.log(res.data);
                })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [user])

    const AuthInfo = {
        user, registration, login, logout, updateInfo, loading, googleSignIn, githubSignIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )

};


export default AuthProvider;