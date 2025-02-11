import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/c37b3cd0-6a95-44e9-8669-4fa9521ff4ff.png"
              alt="Brightstar"
              className="h-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/services"
              className="text-black hover:text-brightstar-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/team"
              className="text-black hover:text-brightstar-primary transition-colors"
            >
              Team
            </Link>
            {/* <Link
              to="/contact"
              className="text-black hover:text-brightstar-primary transition-colors"
            >
              Contact
            </Link> */}
            <a
              href="/contact"
              className="bg-brightstar-primary text-white px-6 py-2 rounded-md hover:bg-brightstar-light transition-colors"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-white shadow-lg">
            <div className="flex flex-col items-center space-y-4 py-6">
              <Link
                to="/services"
                className="text-black hover:text-brightstar-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/team"
                className="text-black hover:text-brightstar-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                Team
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-brightstar-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
              <a
                href="/contact"
                className="bg-brightstar-primary text-white px-6 py-2 rounded-md hover:bg-brightstar-light transition-colors"
                onClick={toggleMobileMenu}
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
