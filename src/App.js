import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favicon from "react-favicon";

import HomePage from "./Pages/HomePage";
import NavigationBar from "./Navigation/NavigationBar";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BugTrackerPage from "./Pages/BugTrackerPage";
import CalendarPage from "./Pages/CalenderPage";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [navbarColor, setNavbarColor] = useState("white");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 1100) {
      setNavbarColor("navbar-white");
    } else {
      setNavbarColor("navbar-black");
    }
  }
  return (
    <>
      <Favicon url={"./Images/favicon-32x32.png"} />
      <BrowserRouter>
        <NavigationBar navbarColor={navbarColor} />{" "}
        <Routes>
          <Route path="/Bug-Tracker/" element={<HomePage />} />
          <Route path="/Bug-Tracker/about" element={<AboutPage />} />
          <Route path="/Bug-Tracker/contact" element={<ContactPage />} />
          <Route path="/Bug-Tracker/bugTracker" element={<BugTrackerPage />} />
          <Route path="/Bug-Tracker/CalendarPage" element={<CalendarPage />} />
          {/* <Route path="/users/:id" element={<UserPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
