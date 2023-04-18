import React from 'react';
import { Logout } from '@mui/icons-material';
import { useAuth } from "../contexts/Contexts";
import { useNavigate } from 'react-router-dom';

interface Props {};

const Header = (props: Props) => {

    const {currentUser, updateUserStatus, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = (): void => {

        updateUserStatus(currentUser, false).then(() => {
            logout();
        }).then(() => {
            navigate('/');
        }).catch((error:string) => console.log(error));

    }

    return(
        <header style={{display: 'flex', flexDirection:'row', padding:'5px', justifyContent:'space-between' }}>
            <h1>
                Landmark Remark
            </h1>
            <div>
                <Logout onClick={handleLogout}/>
            </div>
        </header>
    )
}

export default Header;