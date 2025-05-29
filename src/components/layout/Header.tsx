import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        location.pathname === '/about' || scrolled ? 'bg-navy-700 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-white p-2 rounded-lg">
              <img 
                src={logo} 
                alt="Zinnobyte Logo" 
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/about" active={location.pathname === "/about"}>About Us</NavLink>
            <button onClick={() => handleSectionClick('services')} className="text-sm font-medium text-white hover:text-blue-accent transition-colors duration-300">Services</button>
            <button onClick={() => handleSectionClick('clients')} className="text-sm font-medium text-white hover:text-blue-accent transition-colors duration-300">Clients</button>
            <button onClick={() => handleSectionClick('contact')} className="text-sm font-medium text-white hover:text-blue-accent transition-colors duration-300">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-navy-700 mt-4 rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" active={location.pathname === "/"}>Home</MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === "/about"}>About Us</MobileNavLink>
              <button onClick={() => handleSectionClick('services')} className="block py-2 px-4 rounded-md text-white hover:bg-navy-600 transition-colors duration-300">Services</button>
              <button onClick={() => handleSectionClick('clients')} className="block py-2 px-4 rounded-md text-white hover:bg-navy-600 transition-colors duration-300">Clients</button>
              <button onClick={() => handleSectionClick('contact')} className="block py-2 px-4 rounded-md text-white hover:bg-navy-600 transition-colors duration-300">Contact</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors duration-300 hover:text-blue-accent ${
        active ? 'text-blue-accent' : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`block py-2 px-4 rounded-md transition-colors duration-300 ${
        active ? 'bg-navy-600 text-blue-accent' : 'text-white hover:bg-navy-600'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;