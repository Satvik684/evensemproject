import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, degree, photo, deadline, funding, course, location, link }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  // Check on mount if already wishlisted
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyExists = wishlist.some(item => item.name === name);
    if (alreadyExists) {
      setIsWishlisted(true);
    }
  }, [name]);

  const handleAddToWishlist = () => {
    const wishlistItem = {
      name,
      degree,
      photo,
      deadline,
      funding,
      course,
      location,
      link
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyExists = wishlist.some(item => item.name === name);

    if (!alreadyExists) {
      wishlist.push(wishlistItem);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    setIsWishlisted(true);
  };

  const goToWishlist = () => {
    navigate('/wishlist'); // Make sure this route exists in your app
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
          className="mt-2 px-4 py-2 text-sm bg-pink-600 text-white rounded hover:bg-green-700 transition text-center"
        >
          Go to Wishlist
        </button>
      ) : (
        <button
          onClick={handleAddToWishlist}
          className="mt-2 px-4 py-2 text-sm bg-green-500 text-white rounded hover:bg-pink-600 transition text-center"
        >
          Add to Wishlist
        </button>
      )}
    </div>
  );
};

export default Card;
