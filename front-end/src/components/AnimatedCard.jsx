import React, { useRef, useState, useEffect } from "react";
import "./AnimatedCard.css";
import { useInView } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const AnimatedCard = () => {
  const lastCardRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuthContext();

  const respArr = location.state?.resultData || [];
  const isLastCardInView = useInView(lastCardRef, { threshold: 0.8 });

  const [wishlistedItems, setWishlistedItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setError("You must be logged in to use the wishlist.");
        return;
      }

      try {
        const res = await axios.get("http://localhost:4000/api/user/wishlist", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const names = res.data.map((item) => item.scholarship_name);
        setWishlistedItems(names);
      } catch (err) {
        console.error("Failed to fetch wishlist:", err);
        if (err.response?.status === 401) {
          setError("Session expired. Please log in again.");
        } else {
          setError("Failed to load wishlist.");
        }
      }
    };

    if (!loading) {
      fetchWishlist();
    }
  }, [user, loading]);

  const handleAddToWishlist = async (item) => {
    if (!user) {
      setError("You must be logged in to add items to wishlist.");
      return;
    }

    try {
      await axios.post("http://localhost:4000/api/user/add-to-wishlist", item, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setWishlistedItems((prev) => [...prev, item.scholarship_name]);
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
      if (error.response?.status === 409) {
        setWishlistedItems((prev) => [...prev, item.scholarship_name]);
      } else if (error.response?.status === 401) {
        setError("Session expired. Please log in again.");
      } else {
        setError("Could not add item to wishlist.");
      }
    }
  };

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen flex flex-col">
      <h1 className="text-5xl text-black font-bold mb-6 text-center">
        {respArr.length === 0 ? "No Scholarships Found!" : "Scholarships for you"}
      </h1>

      {error && (
        <div className="text-red-600 text-center font-medium mb-4">{error}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-grow">
        {respArr.map((item, index) => {
          const isLast = index === respArr.length - 1;
          const isWishlisted = wishlistedItems.includes(item.scholarship_name);

          return (
            <div
              ref={isLast ? lastCardRef : null}
              key={index}
              className="block bg-white rounded shadow border border-gray-300 p-4 flex flex-col justify-between"
            >
              <img
                src={item.image_url}
                alt={item.scholarship_name}
                className="w-full h-32 object-contain mb-4 rounded"
              />

              <div className="flex flex-col gap-1 flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.scholarship_name}
                </h2>

                <div className="text-sm text-gray-600">
                  🎓 <strong>{item.eligible_degrees}</strong> | 💰{" "}
                  <strong>{item.funding_type}</strong> | 📚{" "}
                  <strong>{item.eligible_courses}</strong>
                </div>

                <div className="text-sm text-gray-600">📍 {item.location}</div>
                <div className="text-sm text-gray-600">
                  📅 Deadline: {item.deadline}
                </div>
                <div className="text-sm text-gray-600">
                  🌟 Student Friendly: {renderStars(item.student_friendly_rating || 0)}
                </div>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition"
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
                  onClick={() => handleAddToWishlist(item)}
                  className="mt-2 px-4 py-2 text-sm bg-pink-500 text-white rounded hover:bg-pink-600 transition text-center"
                >
                  Add to Wishlist
                </button>
              )}
            </div>
          );
        })}
      </div>

      {isLastCardInView && (
        <footer className="mt-10 text-center text-sm text-gray-500 animate-fade-in">
          © 2025 Scholarship Portal. Built by Hirdesh.
        </footer>
      )}
    </div>
  );
};

export default AnimatedCard;
