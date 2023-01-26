import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function NavigationBar() {
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-menu'>
        <Link className={activeLink === '/' ? 'active' : ''} onClick={() => handleClick('/')} to="/">Home</Link>
        <Link className={activeLink === '/about' ? 'active' : ''} onClick={() => handleClick('/about')} to="/about">About</Link>
        <Link className={activeLink === '/contact' ? 'active' : ''} onClick={() => handleClick('/contact')} to="/contact">Contact</Link>
      </div>
</nav>

  );
}

export default NavigationBar;

