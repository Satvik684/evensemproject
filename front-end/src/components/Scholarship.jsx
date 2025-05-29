import React from "react";
import Card from "./Card";
//import scholarships from '../data/scholarships_200.json'; // adjust path if needed
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
const ScholarshipCards = () => {
  let [scholarships, setScholarships] = useState([]);
  let [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    axios.get("http://localhost:4000/api/user/all").then((response) => {
      setScholarships(response.data);
      setFetching(false);
    });
    
  }, []);
  return (
    <>
      {fetching ? (
        <Loading/>
      ) : (
        <section className="bg-gray-800 py-10 px-4 mb-0 ">
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
      )}
    </>
  );
};

export default ScholarshipCards;
