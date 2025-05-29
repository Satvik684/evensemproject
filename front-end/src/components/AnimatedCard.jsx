import React, { useRef, useState, useEffect } from "react";
import "./AnimatedCard.css";
import { useInView } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AnimatedCard = () => {
  const lastCardRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const respArr = location.state?.resultData || [];
  const isLastCardInView = useInView(lastCardRef, { threshold: 0.8 });

  const [wishlistedItems, setWishlistedItems] = useState([]);

  // 🔍 Fetch wishlist and mark already wishlisted items
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/user/wishlist");
        const names = res.data.map(item => item.scholarship_name);
        setWishlistedItems(names);
      } catch (err) {
        console.error("Failed to fetch wishlist:", err);
      }
    };

    fetchWishlist();
  }, []);

  const handleAddToWishlist = async (item) => {
    try {
      await axios.post("http://localhost:4000/api/user/add-to-wishlist", item);
      setWishlistedItems((prev) => [...prev, item.scholarship_name]);
    } catch (error) {
      if (error.response?.status === 409) {
        setWishlistedItems((prev) => [...prev, item.scholarship_name]);
      } else {
        console.error("Failed to add to wishlist:", error);
      }
    }
  };

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen flex flex-col">
      <h1 className="text-5xl text-black font-bold mb-6 text-center">
        {respArr.length === 0 ? "No Scholarships Found!" : "Scholarships for you"}
      </h1>

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
                <div className="text-sm text-gray-600">📅 Deadline: {item.deadline}</div>
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

