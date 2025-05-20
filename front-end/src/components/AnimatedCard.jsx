import React, { useRef } from "react";
import "./AnimatedCard.css";
import { useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimatedCard = () => {
  const lastCardRef = useRef(null);
  const location = useLocation();
  let respArr = location.state.resultData;
  const isLastCardInView = useInView(lastCardRef, { threshold: 0.8 }); // fully visible
  

  return (
    <>
      <div className="bg-gray-100 p-6 min-h-screen flex flex-col">
        <h1 className="text-5xl text-black  font-bold mb-6 text-center">
          {(respArr.length===0) ? " No Scholarships Found!" :  "Scholarships for you"} 
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-grow">
          {respArr.map((item, index) => {
            const isLast = index === respArr.length - 1;
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

                  <div className="text-sm text-gray-600">
                    📍 {item.location}
                  </div>
                  <div className="text-sm text-gray-600">
                    📅 Deadline: {item.deadline}
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
    </>
  );
};

export default AnimatedCard;
