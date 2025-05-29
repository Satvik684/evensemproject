// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Midsec from './components/Midsec';
import Scholarship from './components/Scholarship';
import Footer from './components/Footer';
import AnimatedCard from './components/AnimatedCard';
import Wishlist from './components/Wishlist'; // ✅ Corrected import
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

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
            <Route path="/login" element={<LoginModal/>}></Route>
            <Route path="/signup" element={<SignUpModal/>}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
         
    </Router>
  );
};

export default App;
