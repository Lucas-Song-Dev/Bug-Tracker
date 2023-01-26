import React, { useState } from "react";

const AddBugPopup = ({ onEditBug }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [status, setStatus] = useState("Open");
  const [reportedBy, setReportedBy] = useState("Self");
  const [createdDate, setCreatedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleEditBug = (e) => {
    e.preventDefault();
    onEditBug({ name, description,reportedBy, severity, status, createdDate });
  };

  return (
    <div className="add-bug-popup">
      <form onSubmit={handleEditBug}>
        <div className="form-group">
          <label>Bug Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter bug name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Bug Description</label>
          <textarea
            className="form-control"
            placeholder="Enter bug description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Severity</label>
          <select
            className="form-control"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Created Date</label>
          <input
            type="date"
            className="form-control"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Edit Bug
        </button>
      </form>
    </div>
  );
};

export default AddBugPopup;
