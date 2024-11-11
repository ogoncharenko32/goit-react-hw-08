import ResponsiveAppBar from '../AppBar/AppBar';
import ButtonAppBar from '../AppBar/AppBar';
// import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      {children}
    </div>
  );
};

export default Layout;
