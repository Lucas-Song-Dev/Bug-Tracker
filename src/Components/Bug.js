import React from "react";

const Bug = React.memo(({
  name,
  description,
  reportedBy,
  createdDate,
  status,
  severity
}) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : bckOn
    ? "node-black"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    >
      {isFinish ? (
        <span
          className="startText"
          style={{ userSelect: "none", overInput: false }}
        >
          ★
        </span>
      ) : isStart ? (
        <span className="startText" style={{ userSelect: "none" }}>
          0
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
});

export default Node;