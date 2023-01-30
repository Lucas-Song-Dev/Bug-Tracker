import React, { useState } from "react";
import BugList from "../Components/BugList";
import AddBugPopup from "../Components/AddBugPopup";
import bugImage from "../Images/ImageOfBug.png";
import EditBugPopup from "../Components/EditBugPopup";
import { v4 as uuidv4 } from "uuid";

const BugTrackerPage = () => {
  const [bugs, setBugs] = useState([
    {
      name: "Edit Button",
      reportedBy: "User 1",
      description: "Edit Button Lacking Function",
      createdDate: "2023-01-26",
      finishedDate: "2023-01-26",
      status: "Closed",
      severity: "High",
      id: uuidv4(),
    },
    {
      name: "NavBar Links",
      reportedBy: "User 2",
      description: "Website needs refresing",
      createdDate: "2023-01-26",
      finishedDate: "2023-01-27",
      status: "Closed",
      severity: "Medium",
      id: uuidv4(),
    },
    {
      name: "Homepage transitions",
      reportedBy: "Self",
      description: "Unable to animate waves",
      createdDate: "2023-01-29",
      finishedDate: "2023-01-30",
      status: "Open",
      severity: "Medium",
      id: uuidv4(),
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

  const handleResolveBug = (id) => {
    const updatedBugs = bugs.map((item) => {
      if (item.id === id) {
        item.status = item.status === "Open" ? "Closed" : "Open";
      }
      return item;
    });
    setBugs(updatedBugs);
  };

  const handleEditBug = (id, updateType, updatedFields) => {
    // Find the index of the bug with the matching ID
    const index = bugs.findIndex((bug) => bug.id === id);
    // Create a copy of the bugs array
    const updatedBugs = [...bugs];
    // Update the bug at the found index with the new status or severity
    if (updateType === 0) {
      updatedBugs[index] = updatedFields;
      handleOpenEditBug();
    } else if (updateType === 1) {
      updatedBugs[index] = {
        ...updatedBugs[index],
        status: updatedFields.status,
      };
    } else if (updateType === 2) {
      updatedBugs[index] = {
        ...updatedBugs[index],
        severity: updatedFields.severity,
      };
    }
    // Update the state with the updated bugs array
    setBugs(updatedBugs);
  };

  const handleOpenEditBug = (e) => {
    setSelectedBug(e);
    setShowEditBugPopup((prevState) => !prevState);
  };

  return (
    <>
      <div className="bugTrackerPage">
        {addBugOpen && (
          <AddBugPopup onClose={handleAddBugOpen} onAddBug={handleAddBug} />
        )}
        {showEditBugPopup && (
          <EditBugPopup bug={selectedBug} onEditBug={handleEditBug} />
        )}
        <div className="table table-unsolved">
          <div className="secondary-title">All Bugs</div>
          <BugList
            bugs={bugs}
            onResolveBug={handleResolveBug}
            onOpenEditBug={handleOpenEditBug}
            onEditBug = {handleEditBug}
          />
        </div>
        <div className="main-title">Bug Tracker</div>
        <button
          className="btn btn-primary btn-add-bug"
          onClick={handleAddBugOpen}
        >
          Submit Bug
        </button>
      </div>
      <img
        className="bugImage"
        src={require("../Images/ImageOfBug.png")}
        alt="A bug"
      />
    </>
  );
};

export default BugTrackerPage;
