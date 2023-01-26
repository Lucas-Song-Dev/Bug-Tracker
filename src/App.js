import React, { useState } from "react";
import BugList from "./Components/BugList";
import AddBugPopup from "./Components/AddBugPopup";
import "./App.css";

const App = () => {
  const [bugs, setBugs] = useState([
    {
      name: "Bug 1",
      reportedBy: "User 1",
      description: "not closing",
      createdDate: "01/01/2022",
      status: "Open",
      severity: "Low",
    },
    {
      name: "Bug 2",
      reportedBy: "User 2",
      description: "not closing",
      createdDate: "02/01/2022",
      status: "Closed",
      severity: "Medium",
    },
  ]);

  
  const [popupOpen, setPopupOpen] = useState(false);

  const handleAddBug = (newBug) => {
    setPopupOpen((prevState) => !prevState);
    setBugs((prevBugs) => [...prevBugs, newBug]);
  };

  const handlePopupOpen = () => {
    setPopupOpen((prevState) => !prevState);
  };

  return (
    <div>
        <div className="main-title">Bug Tracker</div>
        {popupOpen && (
          <AddBugPopup onClose={handlePopupOpen} onAddBug={handleAddBug} />
        )}
        <div className="table table-unsolved">
          <div className="secondary-title">In progress</div>
          <BugList bugs={bugs} />
        </div>
        <div className="table table-solved">
          <div className="secondary-title">Completed</div>
          <BugList bugs={bugs} />
        </div>
        <button className="btn btn-primary btn-add-bug" onClick={handlePopupOpen}>
          Add Bug
        </button>
    </div>
  );
};

export default App;
