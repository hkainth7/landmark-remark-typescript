import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";


interface Props {
    
}

const Login = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPwd, setLoginPwd] = useState("");
    const navigate = useNavigate();

    const {login} = useAuth();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        
        e.preventDefault();
        setIsLoading(true);

        login(loginEmail, loginPwd)
        .then(() => {
            setIsLoading(false);
            navigate('/landmark-remark');
        })
        .catch((error: string) => console.log(error));

    }


    return(
        <div className='login-page'>
            <div>
                <h2>Login</h2>
                <form onSubmit={ e => handleLogin(e)}>
                    <input 
                        type='text' 
                        placeholder='email' 
                        onChange={e => setLoginEmail(e.target.value)}
                    />
                    <input 
                        type='password' 
                        placeholder='password' 
                        onChange={e => setLoginPwd(e.target.value)} 
                        autoComplete='false'
                    />
                    <button>Login</button>
                </form>
            </div>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            {isLoading && <p>Logging In...</p>}
            
        </div>
    )
}

export default Login;