import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WishListCard from './WishlistCard';
import { useAuthContext } from '../hooks/useAuthContext';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loadingWishlist, setLoadingWishlist] = useState(true);
  const [error, setError] = useState(null);

  const { user, loading } = useAuthContext(); // <- get loading from context

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setError('Please log in to view your wishlist.');
        setLoadingWishlist(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:4000/api/user/wishlist', {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
        setWishlist(res.data);
      } catch (err) {
        console.error(err);
        if (err.response?.status === 401) {
          setError('Session expired. Please log in again.');
        } else {
          setError('Failed to load wishlist');
        }
      } finally {
        setLoadingWishlist(false);
      }
    };

    // Wait until AuthContext finishes loading
    if (!loading) {
      fetchWishlist();
    }
  }, [user, loading]);

  const handleDelete = async (id) => {
    if (!user) {
      setError('You must be logged in to delete items from your wishlist.');
      return;
    }

    try {
      await axios.delete(`http://localhost:4000/api/user/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setWishlist((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Failed to delete item:', err);
      alert('Could not delete the item. Try again later.');
    }
  };

  if (loading || loadingWishlist) return <p className="text-center p-4">Loading wishlist...</p>;
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
              id={item._id}
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
              onDelete={() => handleDelete(item._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
