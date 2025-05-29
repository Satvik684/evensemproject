import React from 'react';

const WishListCard = ({
  name,
  degree,
  photo,
  deadline,
  funding,
  course,
  location,
  link,
  sentiment_score,
  student_friendly_rating,
  onDelete, // callback from parent
}) => {
  const renderStars = (rating) => {
    return (
      <div className="text-sm text-gray-600 mt-1">
        🌟 Student Friendly:{" "}
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

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
        {renderStars(student_friendly_rating || 0)}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
      >
        Apply Now
      </a>

      <button
        onClick={onDelete}
        className="mt-2 px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition text-center"
      >
        Delete
      </button>
    </div>
  );
};

export default WishListCard;
