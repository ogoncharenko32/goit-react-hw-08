import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';
import { Button, Link } from '@mui/material';

const AuthNav = () => {
  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <div>
      <NavLink to="/register" className={buildCssClasses} color="inherit">
        Registration
      </NavLink>
      <NavLink to="/login" className={buildCssClasses} color="inherit">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
