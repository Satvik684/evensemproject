import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = ({
  name,
  degree,
  photo,
  deadline,
  funding,
  course,
  location,
  link,
  sentiment_score,
  student_friendly_rating
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  const item = {
    scholarship_name: name,
    eligible_degrees: degree,
    image_url: photo,
    deadline,
    funding_type: funding,
    eligible_courses: course,
    location,
    link,
    sentiment_score,
    student_friendly_rating
  };

  // 🔍 Check if item already in wishlist on mount
  useEffect(() => {
    const checkWishlist = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/user/wishlist');
        const exists = res.data.some(
          (scholarship) => scholarship.scholarship_name === item.scholarship_name
        );
        setIsWishlisted(exists);
      } catch (error) {
        console.error('Error checking wishlist:', error);
      }
    };

    checkWishlist();
  }, []);

  const handleAddToWishlist = async () => {
    try {
      await axios.post('http://localhost:4000/api/user/add-to-wishlist', item);
      setIsWishlisted(true);
    } catch (error) {
      if (error.response?.status === 409) {
        setIsWishlisted(true); // Already exists
      } else {
        console.error('Failed to add to wishlist:', error);
      }
    }
  };

  const goToWishlist = () => {
    navigate('/wishlist');
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
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
      >
        Apply Now
      </a>

      {isWishlisted ? (
        <button
          onClick={goToWishlist}
          className="mt-2 px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition text-center"
        >
          Go to Wishlist
        </button>
      ) : (
        <button
          onClick={handleAddToWishlist}
          className="mt-2 px-4 py-2 text-sm bg-pink-500 text-white rounded hover:bg-pink-600 transition text-center"
        >
          Add to Wishlist
        </button>
      )}
    </div>
  );
};

export default Card;
