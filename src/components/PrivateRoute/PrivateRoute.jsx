import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
