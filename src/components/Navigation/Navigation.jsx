import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { Button, Link } from '@mui/material';

const Navigation = () => {
  const buildCssClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
  return (
    <div>
      <Button variant="outlined" color="inherit" href="/">
        Home
      </Button>
    </div>
  );
};

export default Navigation;
