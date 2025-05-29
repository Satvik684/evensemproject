// src/components/Wishlist.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WishListCard from './WishlistCard';


const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch wishlist once on mount
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:4000/api/user/wishlist');
        setWishlist(res.data);
      } catch (err) {
        setError('Failed to load wishlist');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // Handle delete by _id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/user/delete/${id}`);
      // Update local state by filtering out deleted item
      setWishlist(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error('Failed to delete item:', err);
      alert('Could not delete the item. Try again later.');
    }
  };

  if (loading) return <p className="text-center p-4">Loading wishlist...</p>;
  if (error) return <p className="text-center p-4 text-red-600">{error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <WishListCard
              key={item._id}
              id={item._id} // pass _id to card for deletion
              name={item.scholarship_name}
              degree={item.eligible_degrees}
              photo={item.image_url}
              deadline={item.deadline}
              funding={item.funding_type}
              course={item.eligible_courses}
              location={item.location}
              link={item.link}
              sentiment_score={item.sentiment_score}
              student_friendly_rating={item.student_friendly_rating}
              onDelete={() => handleDelete(item._id)} // callback for delete button
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
