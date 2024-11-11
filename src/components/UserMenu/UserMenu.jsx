import { useDispatch, useSelector } from 'react-redux';
import { NavLink as LinkRouter } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import clsx from 'clsx';
import css from './UserMenu.module.css';
import { Button, Link } from '@mui/material';

const UserMenu = () => {
  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  const dispatch = useDispatch();

  const userData = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onLogout = () => {
    dispatch(logout());
    const action = {
      type: 'contacts/clearContacts',
    };
    dispatch(action);
  };

  return (
    <div className={css.wrapper}>
      {isLoggedIn && <div className={css.text}>Hello, {userData.name}</div>}
      <Link href="#" component="span" variant="contained">
        <LinkRouter to="/contacts">Contacts</LinkRouter>
      </Link>

      <Button onClick={onLogout} variant="contained" type="submit">
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
