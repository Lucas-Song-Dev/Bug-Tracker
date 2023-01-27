import React, { useState } from "react";

const BugList = ({ bugs, onEditBug, onResolveBug }) => {

  const handleResolveBug = (id) => {
    onResolveBug(id);
  };

  const handleEditBug = (id) => {
    onEditBug(id);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th style={{width: "2.5vw"}}></th>
            <th >Name</th>
            <th style={{width: "12vw"}}>Description</th>
            <th>Reported</th>
            <th>Created date</th>
            <th>Status</th>
            <th>Severity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr key={bug.name}>
              <td><button onClick={() => handleEditBug(bug)} /*className="btn btn-primary"*/ > {String.fromCharCode(62)} </button></td>
              <td>{bug.name}</td>
              <td>{bug.description}</td>
              <td>{bug.reportedBy}</td>
              <td>{bug.createdDate}</td>
              <td>{bug.status}</td>
              <td>{bug.severity}</td>
              <td>
              {<button onClick={() => handleResolveBug(bug)}>{bug.status === 'Open' ? 'resolve' : 're-open'}</button> }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BugList;
