import React, { useState } from "react";

const BugList = ({ bugs, onEditBug, onOpenEditBug, onResolveBug }) => {
  const handleResolveBug = (id) => {
    onResolveBug(id);
  };

  const handleOpenEditBug = (e) => {
    onOpenEditBug(e);
  };

  const handleChangeStatus = (e, id) => {
    onEditBug(id, 1, { status: e.target.value });
  };

  const handleChangeSeverity = (e, id) => {
    console.log({ severity: e.target.value });
    onEditBug(id, 2, { severity: e.target.value });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th style={{ width: "3.2vw" }}></th>
            <th>Name</th>
            <th style={{ width: "20vw" }}>Description</th>
            <th>Reported</th>
            <th>Created</th>
            <th>Status</th>
            <th>Severity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr key={bug.id}>
              <td>
                <button
                  onClick={() => handleOpenEditBug(bug)}
                  className="btn btn-edit-bug"
                >
                  {" "}
                  ▶
                </button>
              </td>
              <td>{bug.name}</td>
              <td>{bug.description}</td>
              <td>{bug.reportedBy}</td>
              <td>{bug.createdDate}</td>
              <td>
                <select
                  value={bug.status}
                  onChange={(e) => handleChangeStatus(e, bug.id)}
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
              <td>
                <select
                  value={bug.severity}
                  onChange={(e) => handleChangeSeverity(e, bug.id)}
                  id="severity"
                >
                  <option class="low" value="low">
                    Low
                  </option>
                  <option class="medium" value="medium">
                    Medium
                  </option>
                  <option class="high" value="high">
                    High
                  </option>
                </select>
              </td>{" "}
              <td>
                {
                  <button onClick={() => handleResolveBug(bug.id)}>
                    {bug.status === "Open" ? "resolve" : "re-open"}
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BugList;
