import React, {useContext, useState, useEffect} from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {updateDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}){

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth);
    }

    async function updateUserStatus(currentUser, status){
        
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", `${currentUser.email}`));
        const querySnapshot = await getDocs(q);
        let userId = '';

        querySnapshot.forEach((doc) => {
            userId = doc.id;
        });

        const userRef = doc(db, 'users', `${userId}`)
        const updateStatus = {isActive: status}
        
        try {
            await updateDoc(userRef, updateStatus)    
    
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    const value ={
        currentUser,
        signUp,
        login,
        logout,
        updateUserStatus
    
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  );
}

