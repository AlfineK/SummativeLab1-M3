import { useState } from "react";
import OldProjectCard from "./OldProjectCard";

const OldProjectList = ({ projects }) => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    return project.projectTitle.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <br />
      <div className="relative">
        <input
          className="w-full bg-white rounded-2xl shadow-sm border-slate-200 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          name="search"
          type="text"
          placeholder="Search project"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <div>
        {filteredProjects.length>0?
       ( filteredProjects.map((project) => (
          <OldProjectCard project={project} key={project.projectId} />)
        )):(
          <p className="text-center text-sm text-slate-600 py-8">No projects found matching your search</p>
        )}
      </div>
    </div>
  );
};
export default OldProjectList;
