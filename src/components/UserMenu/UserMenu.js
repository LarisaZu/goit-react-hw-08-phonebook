import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import {logOut} from '../../redux/auth/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    // const name = useSelector(getUserName)
    return (
        <div>
            <p>Welcome, name</p>
            <button type="button" onClick={()=> dispatch(logOut())}>Log Out</button>
    </div>
)
}

export default UserMenu;
