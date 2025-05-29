import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';

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
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

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

  useEffect(() => {
    const checkWishlist = async () => {
      if (!user) {
        setError("Please log in to use the wishlist.");
        return;
      }

      try {
        const res = await axios.get('http://localhost:4000/api/user/wishlist', {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });

        const exists = res.data.some(
          (scholarship) => scholarship.scholarship_name === item.scholarship_name
        );
        setIsWishlisted(exists);
      } catch (error) {
        console.error('Error checking wishlist:', error);
        if (error.response?.status === 401) {
          setError("Session expired. Please log in again.");
        } else {
          setError("Failed to check wishlist.");
        }
      }
    };

    checkWishlist();
  }, [user, item.scholarship_name]);

  const handleAddToWishlist = async () => {
    if (!user) {
      setError("You must be logged in to add to wishlist.");
      return;
    }

    try {
      await axios.post(
        'http://localhost:4000/api/user/add-to-wishlist',
        item,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );
      setIsWishlisted(true);
    } catch (error) {
      if (error.response?.status === 409) {
        setIsWishlisted(true); // Already added
      } else if (error.response?.status === 401) {
        setError("Session expired. Please log in again.");
      } else {
        console.error('Failed to add to wishlist:', error);
        setError("Failed to add to wishlist.");
      }
    }
  };

  const goToWishlist = () => {
    navigate('/wishlist');
  };

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

      {error && (
        <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
      )}

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
