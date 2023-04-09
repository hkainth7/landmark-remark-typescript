import React, { useState } from 'react';
import { User } from '../types/UserType';
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';


interface Props {}


const Signup = (props: Props) => {

    const {signUp} = useAuth();
    const userRef = collection(db, "users")

    const [isLoading, setIsLoading] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [createEmail, setCreateEmail] = useState('');
    const [createPwd, setCreatePwd] = useState('');



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {

        e.preventDefault();

        setIsLoading(true);
        signUp(createEmail, createPwd)
        .then((res:any) => {
            console.log(res)
            const userId = res.user.uid
            const newUser: User = {
                id: userId,
                email: createEmail,
                isActive: false
            }
            try {
                addDoc(userRef, newUser);
                setIsLoading(false);
                setUserCreated(true);
            } catch (error) {
                console.log(error);
            }
        })
        .catch((error:string) => console.log(error))
    }



  return (
    <div>
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={ e => handleSubmit(e)}>
                <input type='text' placeholder='email' onChange={e => setCreateEmail(e.target.value)}/>
                <input type='password' placeholder='password' onChange={e => setCreatePwd(e.target.value)}/>
                <button>Sign Up</button>
            </form>
            </div>
            <p>Have an account? <Link to="/">Login</Link></p>
            {isLoading && <p>creating user please wait</p>}
            {userCreated && <p>user successfully created. Please login</p>}
    </div>
  )
}

export default Signup