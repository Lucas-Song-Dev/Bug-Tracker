import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function NavigationBar() {
  const [color, setColor] = useState('white');

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 100) {
        setColor('black');
      } else {
        setColor('white');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const extraClassName = (color === "white")
    ? "navbar-white"
    : "navbar-black";

  return (
    <nav className={`navbar ${extraClassName}`} >
      <div className='navbar-menu'>
        <Link className={activeLink === '/Bug-Tracker/' ? 'active' : ''} onClick={() => handleClick('/')} to="/Bug-Tracker/">Home</Link>
        <Link className={activeLink === '/Bug-Tracker/about' ? 'active' : ''} onClick={() => handleClick('/about')} to="/Bug-Tracker/about">About</Link>
        <Link className={activeLink === '/Bug-Tracker/contact' ? 'active' : ''} onClick={() => handleClick('/contact')} to="/Bug-Tracker/contact">Contact</Link>
        <Link className={activeLink === '/Bug-Tracker/bugTracker' ? 'active' : ''} onClick={() => handleClick('/bugTracker')} to="/Bug-Tracker/bugTracker">Bug Tracker</Link>
      </div>
</nav>

  );
}

export default NavigationBar;

