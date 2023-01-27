import React, { useState } from "react";
import BugList from "../Components/BugList";
import AddBugPopup from "../Components/AddBugPopup";
import bugImage from '../Images/ImageOfBug.png';
 


const BugTrackerPage = () => {
  const [bugs, setBugs] = useState([
    {
      name: "Edit Button",
      reportedBy: "User 1",
      description: "Edit Button Lacking Function",
      createdDate: "01/01/2022",
      status: "Open",
      severity: "High",
    },
    {
      name: "NavBar Links",
      reportedBy: "User 2",
      description: "Website needs refresing",
      createdDate: "02/01/2022",
      status: "Closed",
      severity: "Medium",
    },
  ]);

  const [addBugOpen, setAddBugOpen] = useState(false);
  const [showEditBugPopup, setShowEditBugPopup] = useState(false);
  const [selectedBug, setSelectedBug] = useState(null);

  const handleAddBug = (newBug) => {
    setAddBugOpen((prevState) => !prevState);
    setBugs((prevBugs) => [...prevBugs, newBug]);
  };

  const handleAddBugOpen = () => {
    setAddBugOpen((prevState) => !prevState);
  };

  const handleResolveBug = (bug) => {
    const updatedBugs = bugs.map((item) => {
      if (item.name === bug.name) {
        item.status = item.status === "Open" ? "Closed" : "Open";
      }
      return item;
    });
    setBugs(updatedBugs);
  };

  const handleEditBug = (bug) => {
    setSelectedBug(bug);
    setShowEditBugPopup(true);
  };

  const handleCloseEditBugPopup = () => {
    setShowEditBugPopup(false);
  };

  const handleSubmitEditBug = (editedBug) => {
    // update the bug in the bugs array
    setShowEditBugPopup(false);
  };

  return (
    <>
    <div>
      <div className="main-title">Bug Tracker</div>
      {addBugOpen && (
        <AddBugPopup onClose={handleAddBugOpen} onAddBug={handleAddBug} />
      )}
      <div className="table table-unsolved">
        <div className="secondary-title">In progress</div>
        <BugList
          bugs={bugs.filter((bug) => bug.status !== "Closed")}
          onResolveBug={handleResolveBug}
          onEditBug={handleEditBug}
        />
      </div>
      <div className="table table-solved">
        <div className="secondary-title">Completed</div>
        <BugList
          bugs={bugs.filter((bug) => bug.status === "Closed")}
          onResolveBug={handleResolveBug}
          onEditBug={handleEditBug}
        />
      </div>
      <button
        className="btn btn-primary btn-add-bug"
        onClick={handleAddBugOpen}
      >
        Submit Bug
      </button>
    </div>
    <img className="bugImage" src={require('../Images/ImageOfBug.png')} alt="A bug" />
    </>
  );
};

export default BugTrackerPage;
