import React from 'react';

const Card = ({ name, degree, photo, deadline }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow p-4 flex flex-col transform transition duration-300 hover:scale-105 hover:bg-gray-50">
      <img
        src={photo}
        alt={name}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-4">
        <h3 className="text-lg text-black font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">Degree: {degree}</p>
        <p className="text-sm text-gray-600">Deadline: {deadline}</p>
      </div>
      <button className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  );
};

export default Card;
