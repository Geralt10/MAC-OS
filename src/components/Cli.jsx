import React from "react";
import Terminal from "react-console-emulator";
import "./Cli.scss";
import MacWindow from "../windows/MacWindow";

const commands = {
  help: {
    description: "List available commands",
    fn: () => `
Available commands:
- help        Show this help message
- about       About me
- projects    My projects
- skills      My skills
- whoami     Who am I?
- date        Current date & time
- socials     Social profiles
- contact     Contact info
- echo <text> Echo input text
- clear       Clear the terminal
    `,
  },

  about: {
    description: "About me",
    fn: () =>
      "Hi, I’m Himanshu Dhoundiyal 👋\nFrontend Developer | React | UI/UX",
  },

  projects: {
    description: "My projects",
    fn: () => `
• Portfolio Website
• macOS UI Clone
• Resume Viewer
• CLI Terminal App
    `,
  },

  skills: {
    description: "My skills",
    fn: () => `
Frontend:
- React
- JavaScript
- HTML / CSS / SCSS
- Tailwind CSS

Backend (Basics):
- Node.js
- Express

Tools:
- Git / GitHub
- VS Code
    `,
  },

  whoami: {
    description: "Current user",
    fn: () => "himanshu (frontend-developer)",
  },

  date: {
    description: "Show current date",
    fn: () => new Date().toString(),
  },

  socials: {
    description: "Social profiles",
    fn: () => `
GitHub   → https://github.com/your-username
LinkedIn → https://linkedin.com/in/your-username
    `,
  },

  contact: {
    description: "Contact information",
    fn: () => `
Email → himanshu.dhoundiyal.123@gmail.com
Location → India 🇮🇳
    `,
  },

  echo: {
    description: "Echo input text",
    fn: (...args) => args.join(" "),
  },

  clear: {
    description: "Clear terminal",
    fn: () => "",
  },
};

const Cli = ({windowName,setWindow}) => {
  return (
    <MacWindow  windowName={windowName} setWindow={setWindow}>
          <div className="cli-wrapper">
      <Terminal
        commands={commands}
        noDefaults
        welcomeMessage="Welcome to Himanshu's Terminal 🚀"
        promptLabel="HimanshuDhoundiyal:~$ "
        autoFocus
      />
    </div>
    </MacWindow>
  
  );
};

export default Cli;
