
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import useAxiosPublic from "../hooks/useAxiosPublic";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


   

    // Sign in 
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign Out
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }






    // Update userProfile
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

  
    // obserber
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const loggUser = currentUser?.email || user?.email;
            const userInfo = { email: loggUser};
            
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                axiosPublic.post('/jwt', userInfo,{withCredentials:true})
                    .then(res=>console.log(res.data))
            }
            else {
               axiosPublic.post('/logout', userInfo, {withCredentials: true})
            }
           setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic,user?.email])


    const authInfo = {
        user,
        setUser,
        updateUser,
        loading,
        creatUser,
        logIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// props-type validation
AuthProvider.propTypes = {
    children: PropTypes.array,
};
export default AuthProvider;