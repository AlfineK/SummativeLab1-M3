import { useState } from "react";

const NewProject = ({onAddProject}) => {

  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");

function handleSubmit(e){
  e.preventDefault();
   onAddProject(addTitle,addDescription)
   setAddTitle("")
   setAddDescription('')
}


  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-lg text-slate-900 border-b pb-2 font-bold">Add new Poject</h2>
        <br />
        <div >
          <label className="block text-sm font-semibold uppercase text-slate-600 ">Title</label>
          <br />
          <input className="rounded-xl py-2 px-20 border-2 border-slate-300 w-full focus:outline-none focus:ring-2 focus:ring-text-teal-500"
            type="text"
            name="title"
            value={addTitle}
            id="title"
            required
            onChange={(e) => setAddTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold uppercase text-slate-600">Description</label>
          <br />
          <input className="border-2 border-slate-300 rounded-xl  py-2 px-20 w-full focus:outline-none focus:ring-2 focus:ring-text-teal-500  "
            type="text"
            name="description"
            id="description"
            required
            value={addDescription}
            onChange={(e) => setAddDescription(e.target.value)}
          />
        </div>
        <input type="submit"  value="createNewProject"  className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-2xl shadow-sm"/>
      </form>
    </div>
  );
};
export default NewProject;
