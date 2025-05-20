import React from 'react';

const Card = ({ name, degree, photo, deadline, funding, course, location, link }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow p-4 flex flex-col transform transition duration-300 hover:scale-105 hover:bg-gray-50">
     <div className="bg-white h-48 flex items-center justify-center rounded overflow-hidden">
  <img
    src={photo}
    alt={name}
    className="max-h-full max-w-full object-contain"
  />
</div>
      <div className="mt-4 flex-grow">
        <h3 className="text-lg text-black font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">🎓 Degree: {degree}</p>
        <p className="text-sm text-gray-600">📚 Courses: {course}</p>
        <p className="text-sm text-gray-600">📍 Location: {location}</p>
        <p className="text-sm text-gray-600">💰 Funding: {funding}</p>
        <p className="text-sm text-gray-600">🕒 Deadline: {deadline}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
      >
        Apply Now
      </a>
    </div>
  );
};

export default Card;
