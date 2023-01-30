import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function NavigationBar({ navbarColor }) {
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={`navbar ${navbarColor}`}>
      <div className={`navbar-menu  ${navbarColor} `}>
        <Link
          className={activeLink === "/Bug-Tracker/" ? "active" : ""}
          onClick={() => handleClick("/")}
          to="/Bug-Tracker/"
          style={{position:"absolute", right: "180px", top: "-30px", width: "0px", height: "0px" }}
        >
          <img
            src={require("../Images/AstroProfileCircle.png")}
            width="70vw"
            height="70vw"
            alt=""
            className={"HomeImage"}
          />
        </Link>
        <Link
          className={activeLink === "/Bug-Tracker/bugTracker" ? "active" : ""}
          onClick={() => handleClick("/bugTracker")}
          to="/Bug-Tracker/bugTracker"
          style={{position: "relative", paddingLeft:"130px"}}

        >
          Bug Tracker
        </Link>
        <Link
          className={activeLink === "/Bug-Tracker/calendarPage" ? "active" : ""}
          onClick={() => handleClick("/calendarPage")}
          to="/Bug-Tracker/calendarPage"
          style={{position: "relative",paddingLeft:"30px"}}
        >
          Calendar
        </Link>
        <Link
          className={activeLink === "/Bug-Tracker/about" ? "active" : ""}
          onClick={() => handleClick("/about")}
          to="/Bug-Tracker/about"
          style={{position: "relative",paddingLeft:"30px"}}

        >
          About
        </Link>
        <Link
          className={activeLink === "/Bug-Tracker/contact" ? "active" : ""}
          onClick={() => handleClick("/contact")}
          to="/Bug-Tracker/contact"
          style={{position: "relative",paddingLeft:"30px",}}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
