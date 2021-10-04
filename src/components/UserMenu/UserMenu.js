import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    return (
        <div className={s.user_menu}>
            <p>Welcome, {name}</p>
            <button className={s.bottom} type="button" onClick={()=> dispatch(logOut())}>Log Out</button>
    </div>
)
}

export default UserMenu;
