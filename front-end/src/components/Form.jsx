import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔥 NEW

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gpa: '',
    degree: '',
    location: ''
  });

  const navigate = useNavigate(); // 🔥 NEW

  const degreeOptions = [
    "Bachelors", "Conferences & Travel Grants", "Diploma", "High/Secondary School",
    "Masters", "MBA", "PhD", "Post Doc", "Research Fellow/ Scientist", "Training & Short courses"
  ];

  const locationOptions = [
    "Any research institution around the world", "Colleges/Universities in India", "Delhi",
    "Educational institutions in Maharashtra", "India", "Maharashtra", "Universities abroad", "West Bengal"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect to AnimatedCard
    navigate("/results");
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                <input
                  type="number"
                  name="gpa"
                  step="0.01"
                  value={formData.gpa}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                >
                  <option value="" disabled>Select Degree</option>
                  {degreeOptions.map((degree) => (
                    <option key={degree} value={degree}>{degree}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  required
                >
                  <option value="" disabled>Select Location</option>
                  {locationOptions.map((location) => (
                    <option key={location} value={location}>{location}</option>
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
