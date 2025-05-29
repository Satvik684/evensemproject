import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loading from "./Loading";
import { useAuthContext } from "../hooks/useAuthContext";

const ScholarshipCards = () => {
  const [scholarships, setScholarships] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null); // 🔥 for displaying errors

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchScholarships = async () => {
      if (!user) {
        setError("You must be logged in to view scholarships.");
        return;
      }

      setFetching(true);
      setError(null); // clear previous error

      try {
        const response = await axios.get("http://localhost:4000/api/user/all", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setScholarships(response.data);
      } catch (err) {
        console.error("Error fetching scholarships:", err);
        if (err.response) {
          if (err.response.status === 401) {
            setError("Unauthorized. Please log in again.");
          } else {
            setError(err.response.data.error || "Something went wrong.");
          }
        } else {
          setError("Network error. Please try again.");
        }
      } finally {
        setFetching(false);
      }
    };

    fetchScholarships();
  }, [user]);

  if (fetching) return <Loading />;

  if (error) {
    return (
      <div className="text-center py-10 px-4 text-red-500 font-semibold text-lg">
        {error}
      </div>
    );
  }

  return (
    <section className="bg-gray-800 py-10 px-4 mb-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Showing All Scholarships
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {scholarships.map((scholarship, index) => (
            <Card
              key={index}
              name={scholarship.scholarship_name}
              degree={scholarship.eligible_degrees}
              photo={scholarship.image_url}
              deadline={scholarship.deadline}
              funding={scholarship.funding_type}
              course={scholarship.eligible_courses}
              location={scholarship.location}
              link={scholarship.link}
              sentiment_score={scholarship.sentiment_score}
              student_friendly_rating={scholarship.student_friendly_rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCards;
