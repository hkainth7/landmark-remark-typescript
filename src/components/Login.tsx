import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {updateDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import '../login.css';
import { useAuth } from "../contexts/AuthContext";

interface Props {}

const Login = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPwd, setLoginPwd] = useState("")
    const navigate = useNavigate();

    const {login} = useAuth();
    const usersRef = collection(db, "users");

    const updateUserStatus = async () => {
        
        const q = query(usersRef, where("email", "==", `${loginEmail}`));
        const querySnapshot = await getDocs(q);
        let userId:string = '';

        querySnapshot.forEach((doc) => {
            userId = doc.id;
        });

        const userRef = doc(db, 'users', `${userId}`)
        const updateStatus = {isActive: true}
        
        try {
            updateDoc(userRef, updateStatus)    
    
        } catch (error) {
            console.log(error);
        }
    }
    

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        setIsLoading(true);

        login(loginEmail, loginPwd)
        .then(() => updateUserStatus)
        .then(() => {
            setIsLoading(false);
            navigate('/landmark-remark');
        })
        .catch((error:string) => console.log(error))
        
    }


    return(
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit={ e => handleLogin(e)}>
                    <input type='text' placeholder='email' onChange={e => setLoginEmail(e.target.value)}/>
                    <input type='pwd' placeholder='password' onChange={e => setLoginPwd(e.target.value)}/>
                    <button>Login</button>
                </form>
            </div>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            {isLoading && <p>Logging In...</p>}
        </div>
    )
}

export default Login;