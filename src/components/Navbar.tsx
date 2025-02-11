
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/c37b3cd0-6a95-44e9-8669-4fa9521ff4ff.png" alt="Brightstar" className="h-16" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-black hover:text-brightstar-primary transition-colors">
              Services
            </Link>
            <Link to="/team" className="text-black hover:text-brightstar-primary transition-colors">
              Team
            </Link>
            <Link to="/contact" className="text-black hover:text-brightstar-primary transition-colors">
              Contact
            </Link>
            <a 
              href="/contact"
              className="bg-brightstar-primary text-white px-6 py-2 rounded-md hover:bg-brightstar-light transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
