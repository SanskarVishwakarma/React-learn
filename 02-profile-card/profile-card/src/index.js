import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsData = [
  {
    id: 1,
    skill: "JavaScript",
    level: "Intermediate",
    color: "#F7DF1E",
  },
  {
    id: 2,
    skill: "React",
    level: "Intermediate",
    color: "#61DAFB",
  },
  {
    id: 3,
    skill: "HTML/CSS",
    level: "Advanced",
    color: "#E34C26",
  },
  {
    id: 4,
    skill: "Tailwind CSS",
    level: "Beginner",
    color: "#06B6D4",
  },
  {
    id: 5,
    skill: "Node.js",
    level: "Beginner",
    color: "#339933",
  },
  {
    id: 6,
    skill: "MongoDB",
    level: "Beginner",
    color: "#13AA52",
  },
];

function App() {
  return (
    <div className="Card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/109402205?v=4"
        alt="avatar_img"
        className="avatar_img"
      />
    </>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Vishweshwaran</h1>
      <p>Frontend Developer</p>
    </div>
  );
}

function getLevelEmoji(level) {
  switch (level) {
    case "Beginner":
      return "🟢";
    case "Intermediate":
      return "🟡";
    case "Advanced":
      return "🔴";
  }
}
function SkillList() {
  console.log(skillsData);

  return (
    <div className="skill-list">
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skills) => (
          <li>
            {skills.skill}
            <span>{getLevelEmoji(skills.level)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
