import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function NavigationBar({navbarColor}) {
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    
    <nav className={`navbar ${navbarColor}`} >
      <div className={`navbar-menu  ${navbarColor} ` }>
        <Link className={activeLink === '/Bug-Tracker/' ? 'active' : ''} onClick={() => handleClick('/')} to="/Bug-Tracker/">Home</Link>
        <Link className={activeLink === '/Bug-Tracker/about' ? 'active' : ''} onClick={() => handleClick('/about')} to="/Bug-Tracker/about">About</Link>
        <Link className={activeLink === '/Bug-Tracker/contact' ? 'active' : ''} onClick={() => handleClick('/contact')} to="/Bug-Tracker/contact">Contact</Link>
        <Link className={activeLink === '/Bug-Tracker/bugTracker' ? 'active' : ''} onClick={() => handleClick('/bugTracker')} to="/Bug-Tracker/bugTracker">Bug Tracker</Link>
      </div>
</nav>

  );
}

export default NavigationBar;

