import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { SDivRoot } from '../styles/styledcomponents';

function Layout() {
  return (
    <SDivRoot>
      <Header />
      <Outlet />
      <Footer />
    </SDivRoot>
  );
}

export default Layout;
