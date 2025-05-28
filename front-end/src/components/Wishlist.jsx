// src/components/Wishlist.jsx
import React from 'react';
import Card from './Card';

const Wishlist = () => {
  // Dummy data for now
  const wishlistData = [
    {
      name: 'Global Excellence Scholarship',
      degree: 'Undergraduate',
      photo: 'https://via.placeholder.com/150',
      deadline: '2025-06-30',
      funding: 'Full',
      course: 'Engineering',
      location: 'USA',
      link: 'https://example.com/scholarship1',
    },
    {
      name: 'Merit-based Scholarship',
      degree: 'Postgraduate',
      photo: 'https://via.placeholder.com/150',
      deadline: '2025-07-15',
      funding: 'Partial',
      course: 'Business',
      location: 'UK',
      link: 'https://example.com/scholarship2',
    },
    {
      name: 'STEM Leaders Scholarship',
      degree: 'Masters',
      photo: 'https://via.placeholder.com/150',
      deadline: '2025-08-20',
      funding: 'Full',
      course: 'Science',
      location: 'Australia',
      link: 'https://example.com/scholarship3',
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistData.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            degree={item.degree}
            photo={item.photo}
            deadline={item.deadline}
            funding={item.funding}
            course={item.course}
            location={item.location}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
