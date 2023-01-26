import React, { useState } from "react";

const BugList = ({ bugs, onUpdateBug }) => {
  const [selectedBug, setSelectedBug] = useState(null);

  const handleBugSelect = (bug) => {
    setSelectedBug(bug);
  };

  const handleStatusChange = (e) => {
    const updatedBug = { ...selectedBug, status: e.target.value };
    onUpdateBug(updatedBug);
    setSelectedBug(null);
  };

  const handleEditBug = (e) => {
    

  }

  return (
    <>
      <table >
        <thead>
          <tr>
            <th></th>
            <th>BUG Name</th>
            <th>BUG Description</th>
            <th>Reported by</th>
            <th>Created date</th>
            <th>Status</th>
            <th>Severity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr key={bug.name}>
              <td><button onClick={handleEditBug()}> edit </button></td>
              <td>{bug.name}</td>
              <td>{bug.description}</td>
              <td>{bug.reportedBy}</td>
              <td>{bug.createdDate}</td>
              <td>{bug.status}</td>
              <td>{bug.severity}</td>
              <td><button> resolve </button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BugList;
