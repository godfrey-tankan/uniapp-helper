
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-900">UniApply</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs</Link>
            <Link to="#statistics" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</Link>
            <Link to="#news" className="text-gray-700 hover:text-blue-600 font-medium">News</Link>
            <Link to="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">Log in</Link>
              <Link 
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-4 py-2"
              >
                Register
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-5 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="#programs" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link 
              to="#statistics" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={toggleMenu}
            >
              Statistics
            </Link>
            <Link 
              to="#news" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={toggleMenu}
            >
              News
            </Link>
            <Link 
              to="#about" 
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={toggleMenu}
              >
                Log in
              </Link>
              <Link 
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-4 py-2 text-center"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
