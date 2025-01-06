import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import About from "./pages/About";// Import About Page

const App = () => {
  return (
    <Router>
      {/* Full-page wrapper with gradient background */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main Content Area */}
        <main className="container mx-auto py-8 px-4 md:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/detail/:id" element={<Detail />} />{/* Gunakan komponen About */}
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="bg-gradient-to-r from-pink-400 to-orange-400 text-white p-4 shadow-lg">
          <div className="container mx-auto text-center text-sm">
            © {new Date().getFullYear()} Reminder Invitation. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
