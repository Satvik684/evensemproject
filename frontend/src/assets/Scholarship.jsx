import React from 'react';
import Card from './Card';

const scholarships = [
  {
    id: 1,
    name: "National Talent Scholarship",
    degree: "Undergraduate",
    photo: "https://via.placeholder.com/300x150",
    deadline: "June 30, 2025",
  },
  {
    id: 2,
    name: "Merit-based Fund",
    degree: "Postgraduate",
    photo: "https://via.placeholder.com/300x150",
    deadline: "July 15, 2025",
  },
  {
    id: 3,
    name: "Women in STEM Grant",
    degree: "Engineering",
    photo: "https://via.placeholder.com/300x150",
    deadline: "August 10, 2025",
  }
];

const ScholarshipCards = () => {
  return (
    <section className=" bg-gray-800 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Showing All Scholarships</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {scholarships.map((scholarship) => (
            <Card
              key={scholarship.id}
              name={scholarship.name}
              degree={scholarship.degree}
              photo={scholarship.photo}
              deadline={scholarship.deadline}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCards;
