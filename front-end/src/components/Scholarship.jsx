import React from 'react';
import Card from './Card';
import scholarships from '../data/scholarships_200.json'; // adjust path if needed

const ScholarshipCards = () => {
  return (
    <section className="bg-gray-800 py-10 px-4 mb-0 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-white">Showing All Scholarships</h2>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCards;
