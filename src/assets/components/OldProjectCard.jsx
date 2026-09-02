const OldProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex flex-col space-y-2">
        <div key={project.projectId} className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900 text-base">{project.projectTitle}</h2>
        </div>
        <p className="text-sm text-teal-600">{project.projectDescription}</p>
      </div>
    </div>
  );
};
export default OldProjectCard;
