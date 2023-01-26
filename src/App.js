import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavigationBar from "./Navigation/NavigationBar";
import AboutPage from "./Pages/AboutPage";

import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/users/:id" element={<UserPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
