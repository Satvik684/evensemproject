// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Midsec from './components/Midsec';
import Scholarship from './components/Scholarship';
import Footer from './components/Footer';
import AnimatedCard from './components/AnimatedCard';
import Wishlist from './components/Wishlist'; // ✅ Corrected import

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Midsec />
                  {/* <Scholarship /> */}
                </>
              }
            />
            <Route path="/results" element={<AnimatedCard />} />
            <Route path="/all-scholarship" element={<Scholarship />} />
            <Route path="/wishlist" element={<Wishlist />} /> {/* ✅ Wishlist route */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
