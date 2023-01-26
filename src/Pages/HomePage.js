import React, { useState } from "react";
import BugList from "../Components/BugList";
import AddBugPopup from "../Components/AddBugPopup";
import EditBugPopup from "../Components/EditBugPopup";

const HomePage = () => {
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

  const [addBugOpen, setAddBugOpen] = useState(false);
  const [showEditBugPopup, setShowEditBugPopup] = useState(false);
  const [selectedBug, setSelectedBug] = useState(null);

  const handleAddBug = (newBug) => {
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
  );
};

export default HomePage;
