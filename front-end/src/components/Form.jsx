import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔥 NEW
import axios from "axios";
const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const formDegreeElement = useRef();
  const formLocationElement = useRef();
  const formNameElement = useRef();
  const formGPAElement = useRef();
  


  const navigate = useNavigate(); // 🔥 NEW

  const degreeOptions = [
    "Bachelors",
    "Conferences & Travel Grants",
    "Diploma",
    "High/Secondary School",
    "Masters",
    "MBA",
    "PhD",
    "Post Doc",
    "Research Fellow/ Scientist",
    "Training & Short courses",
  ];

  const locationOptions = [
    "INDIA","USA","UK","AUSTRALIA"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const degreeData = formDegreeElement.current.value;
    const locationData = formLocationElement.current.value;
    const postObj = {
      course : degreeData,
      country : locationData,
    }
    formDegreeElement.current.value="";
    formLocationElement.current.value="";
    formNameElement.current.value="";
    formGPAElement.current.value=0;
    axios.post('http://localhost:4000/api/user',postObj)
    .then((response)=>{
      const myArr = response.data;
      navigate("/results",{state:{resultData:myArr}});
    })
    .catch((error)=>{
      console.log("error");
    })
    
    // Redirect to AnimatedCard
    
  };

  return (
    <div className="text-center">
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
      >
        Get Started
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
              Let's Find Scholarship for You
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  ref={formNameElement}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GPA
                </label>
                <input
                  type="number"
                  name="gpa"
                  step="0.01"
                  ref={formGPAElement}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Degree
                </label>
                <select
                  name="degree"
                  ref={formDegreeElement}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                >
                  <option value="" disabled>
                    Select Degree
                  </option>
                  {degreeOptions.map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  name="location"
                  ref={formLocationElement}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  {locationOptions.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-red-500 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
