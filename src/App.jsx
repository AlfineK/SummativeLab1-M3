import { useState } from "react";
import NewProject from "./assets/components/NewProject";
import OldProjectList from "./assets/components/OldProjectList";

const projects = [
  {
    projectId: "SE001",
    projectTitle: "Task Management System",
    projectDescription:
      "A web app for creating, assigning, tracking, and managing tasks.",
  },
  {
    projectId: "SE002",
    projectTitle: "Online Learning Platform",
    projectDescription:
      "A platform for accessing courses, quizzes, and tracking learning progress.",
  },
  {
    projectId: "SE003",
    projectTitle: "Expense Tracker",
    projectDescription:
      "An application for recording expenses, categorizing spending, and viewing financial summaries.",
  },
  {
    projectId: "SE004",
    projectTitle: "Inventory Management System",
    projectDescription:
      "A system for managing products, stock levels, suppliers, and inventory transactions.",
  },
  {
    projectId: "SE005",
    projectTitle: "Appointment Booking System",
    projectDescription:
      "A web application for scheduling, managing, and cancelling appointments online.",
  },
];

const App = () => {
  const [project, setProject] = useState(projects);

  function addProject(title, description) {
    const newProject = {
      projectId: `SE${String(project.length + 1).padStart(3, "0")}`,
      projectTitle: title,
      projectDescription: description,
    };
    setProject((prevProjects) => [...prevProjects, newProject]);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Personal Project Showcase App
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Explore existing projects or add a new one to the collection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <NewProject onAddProject={addProject} />
            </div>
            <div className="md:col-span-2">
            <OldProjectList projects={project} />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
export default App;
