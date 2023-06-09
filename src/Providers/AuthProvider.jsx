import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.congfig";
import axios from "axios";


export const AuthContext = createContext()
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                // Set display name and photo URL
                return updateProfile(userCredential.user, {
                    displayName,
                    photoURL,
                }).then(() => {
                    return userCredential;
                });
            }
        );
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                .then(data => {
                    localStorage.setItem('access-token' , data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        });
        return () => {
            return unsubscribe
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;