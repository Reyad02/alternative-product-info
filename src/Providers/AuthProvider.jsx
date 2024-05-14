import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
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
    }, [])

    const AuthInfo = {
        user, registration, login, logout, updateInfo, loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )

};


export default AuthProvider;