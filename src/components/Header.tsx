import React, {useState} from 'react';
import { Logout } from '@mui/icons-material';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

interface Props {}


const Header = (props: Props) => {

    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();

    console.log(currentUser);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            setError("logout failed")
        }
    }

    return(
        <header>
            <h1>
                Landmark Remark
            </h1>
            <div>
                {currentUser.email}
                <Logout onClick={handleLogout}/>
            </div>
        </header>
    )
}

export default Header;