import { useState } from "react";

interface CreateElectionForm {
  title: string;
  description: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}


const CreateElectionForm = () => {

const [formData, setFormData] = useState<CreateElectionForm>({
    title:"",
    description:"",
    startDate:"",
    startTime:"",
    endDate:"",
    endTime:""
});

const [errors, setErrors] = useState<Record<string,string>>({});
const [successMessage, setSuccessMessage] = useState("");

const formValidation = () => {

    const newErrors: Record<string,string> = {};

    if (!formData.title.trim()){
        newErrors.title = "A title is required."
    }

    if(!formData.description.trim()){
        newErrors.description = "Election description is required."
    }

      if (!formData.startDate) {
    newErrors.startDate = "Start date is required.";
  }

  if (!formData.startTime) {
    newErrors.startTime = "Start time is required.";
  }

  if (!formData.endDate) {
    newErrors.endDate = "End date is required.";
  }

  if (!formData.endTime) {
    newErrors.endTime = "End time is required.";
  }

  //if all four scheduling fields exist validate starting and ending
  if (formData.startDate &&
    formData.endDate &&
    formData.startTime &&
    formData.endTime
  ) {
    const startElection = new Date(`
        ${formData.startDate}T${formData.startTime}`)

        
      const endElection = new Date(`
        ${formData.endDate}T${formData.endTime}`)

        if(startElection >= endElection){
            newErrors.endDate = "Election end date and time must be after the start date and time.";
        }
        
  }
setErrors(newErrors);

return Object.keys(newErrors).length === 0
        
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage("");

    const isvalid = formValidation();

    if(!isvalid) {
        return;
    }

    console.log("Election scheduled:", formData);
    setSuccessMessage("Election scheduled successfully.");

  }

  const handleSaveDraft = () => {
    setSuccessMessage("");

  const newErrors: Record<string, string> = {};

  if (!formData.title.trim()) {
    newErrors.title = "Election title is required.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  console.log("Election saved as draft:", formData);

  setSuccessMessage("Election saved to  draft successfully.");
};



    return(
        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl rounded-xl border bg-white p-6">

  <div>
    <h2 className="text-xl font-semibold text-gray-900">
      Create Election
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      Set up a new school election.
    </p>
  </div>



  {/* Election Title */}
  <div className="mt-6">
    <label
      htmlFor="title"
      className="block text-sm font-medium text-gray-700"
    >
      Election Title
    </label>

    <input
      id="title"
      type="text"
      value={formData.title}
      onChange={(e) =>
        setFormData({
          ...formData,
          title: e.target.value,
        })
      }
      placeholder="e.g. SUG Election 2026"
      className="mt-2 w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2"
    />

    {errors.title && (
  <p className="mt-1 text-sm text-red-600">
    {errors.title}
  </p>
)}
  </div>

  {/* Description */}
  <div className="mt-5">
    <label
      htmlFor="description"
      className="block text-sm font-medium text-gray-700"
    >
      Description
    </label>

    <textarea
      id="description"
      value={formData.description}
      onChange={(e) =>
        setFormData({
          ...formData,
          description: e.target.value,
        })
      }
      rows={4}
      placeholder="Describe this election..."
      className="mt-2 w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2"
    />

    {errors.description && (
  <p className="mt-1 text-sm text-red-600">
    {errors.description}
  </p>
)}
  </div>

  {/* Schedule */}
  <div className="mt-5">
    <h3 className="text-sm font-medium text-gray-700">
      Election Schedule
    </h3>

    <div className="mt-2 grid gap-4 sm:grid-cols-2">

      {/* Start Date */}
      <div>
        <label
          htmlFor="startDate"
          className="block text-sm text-gray-600"
        >
          Start Date
        </label>

        <input
          id="startDate"
          type="date"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              startDate: e.target.value,
            })
          }
          className="mt-1 w-full rounded-lg border px-4 py-2.5"
        />

        {errors.startDate && (
  <p className="mt-1 text-sm text-red-600">
    {errors.startDate}
  </p>
)}
      </div>

      {/* Start Time */}
      <div>
        <label
          htmlFor="startTime"
          className="block text-sm text-gray-600"
        >
          Start Time
        </label>

        <input
          id="startTime"
          type="time"
          value={formData.startTime}
          onChange={(e) =>
            setFormData({
              ...formData,
              startTime: e.target.value,
            })
          }
          className="mt-1 w-full rounded-lg border px-4 py-2.5"
        />

        {errors.startTime && (
  <p className="mt-1 text-sm text-red-600">
    {errors.startTime}
  </p>
)}
      </div>

      {/* End Date */}
      <div>
        <label
          htmlFor="endDate"
          className="block text-sm text-gray-600"
        >
          End Date
        </label>

        <input
          id="endDate"
          type="date"
          value={formData.endDate}
          onChange={(e) =>
            setFormData({
              ...formData,
              endDate: e.target.value,
            })
          }
          className="mt-1 w-full rounded-lg border px-4 py-2.5"
        />

        {errors.endDate && (
  <p className="mt-1 text-sm text-red-600">
    {errors.endDate}
  </p>
)}
      </div>

      {/* End Time */}
      <div>
        <label
          htmlFor="endTime"
          className="block text-sm text-gray-600"
        >
          End Time
        </label>

        <input
          id="endTime"
          type="time"
          value={formData.endTime}
          onChange={(e) =>
            setFormData({
              ...formData,
              endTime: e.target.value,
            })
          }
          className="mt-1 w-full rounded-lg border px-4 py-2.5"
        />

        {errors.endTime && (
  <p className="mt-1 text-sm text-red-600">
    {errors.endTime}
  </p>
)}
      </div>

    </div>
  </div>

  

  {/* Actions */}
  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">

      {successMessage && (
  <p className="flex justify-centermb-4 text-sm bg-green-500 text-white rounded-md text-center px-4 py-2">
    {successMessage}
  </p>
)}

    <button
    onClick={handleSaveDraft}
      type="button"
      className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
    >
      Save as Draft
    </button>

    <button
      type="submit"
      className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
    >
      Schedule Election
    </button>

  </div>

  

</form>
    )}


export default CreateElectionForm