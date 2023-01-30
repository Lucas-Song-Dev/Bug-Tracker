import React from "react";
import bugImage from "../Images/ImageOfBug.png";


function AboutPage() {
  return (
    <div>
      <img
        className="bugImage"
        src={require("../Images/ImageOfBug.png")}
        alt="A bug"
      />
      <h2>Hello!</h2>
      <ul>
        <li>
          Implemented a responsive navigation bar using React Router and Hooks.
        </li>
        <li>
          Utilized state management with Hooks to handle active link
          highlighting and navigation bar color changes on scroll.
        </li>
        <li>
          Implemented smooth transitions using CSS to enhance user experience.
        </li>
        <li>
          Incorporated useEffect Hook to add and remove scroll event listeners
          for navigation bar color change functionality.
        </li>
        <li>
          Incorporated SVG files as background images for specific elements.
        </li>
      </ul>

      <h2>Project Direction for Bug Tracker</h2>
      <ul>
        <li>
          Utilize local storage to persist user data, such as login information
          and bug reports, across browser sessions.
        </li>
        <li>
          Incorporate a form validation system to ensure that all required
          fields are filled in before submitting bug reports.
        </li>
        <li>
          Implement a feature to allow users to search for specific bugs using
          keywords and/or filters.
        </li>
        <li>
          Incorporate a commenting system for users to discuss and collaborate
          on resolving bugs.
        </li>
        <li>
          Incorporate a notification system to alert users of new bug reports,
          comments, and updates.
        </li>
        <li>
          Implement a feature to allow users to assign bugs to specific team
          members and track the progress of bug resolution.
        </li>
        <li>
          Utilize a backend API to handle data storage and retrieval, such as
          Firebase or a custom Node.js server.
        </li>
      </ul>

      <h2>In Progress for Bug Tracker</h2>
      <ol>
        <li>
          Flesh out the base React and frontend for the bug tracker, including
          adding more components, styling, and overall visual design.
        </li>
        <li>
          Implement user authentication to allow users to log in and access
          additional features, such as submitting bug reports and commenting on
          existing bugs.
        </li>
        <li>
          Utilize a backend API, such as a Node.js server, to handle data
          storage and retrieval, such as storing and retrieving bug reports,
          comments, and user information.
        </li>
      </ol>
    </div>
  );
}

export default AboutPage;
