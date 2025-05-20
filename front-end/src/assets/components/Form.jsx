import React, { useState } from 'react';

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gpa: '',
    degree: '',
    location: ''
  });

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
    "Training & Short courses"
  ];

  const locationOptions = [
    "Any research institution around the world",
    "Colleges/Universities in India",
    "Delhi",
    "Educational institutions in Maharashtra",
    "India",
    "Maharashtra",
    "Universities abroad",
    "West Bengal"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Scholarship:', formData);
    alert('Scholarship submitted!');
    setShowForm(false);
    setFormData({
      name: '',
      gpa: '',
      degree: '',
      location: ''
    });
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
              Let's Find Scholarship for You
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black"
                  placeholder="Enter your GPA"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Where do you want the scholarship?</label>
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

              <div className="flex justify-between mt-4">
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
