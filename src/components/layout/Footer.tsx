import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Zinnobyte</h3>
            <p className="text-gray-300 mb-4">
              Connecting exceptional talent with innovative startups. 
              We help build teams that drive growth and transform industries.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('services')}
                  className="text-gray-300 hover:text-blue-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('clients')}
                  className="text-gray-300 hover:text-blue-accent transition-colors"
                >
                  Clients
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick('contact')}
                  className="text-gray-300 hover:text-blue-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-accent mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                C-803 Tower 1 Adarsh Palm Retreat,<br />
                Devarabisnahalli Outer Ring Road<br />
                Bengaluru- 560103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-accent mr-2 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-blue-accent transition-colors">
                  +91 9880772126
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-accent mr-2 flex-shrink-0" />
                <a href="mailto:shweta.goyal@zinnobyte.com" className="text-gray-300 hover:text-blue-accent transition-colors">
                shweta.goyal@zinnobyte.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Zinnobyte. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <a href="#" className="text-gray-400 hover:text-blue-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-accent text-sm transition-colors">
                Terms of Service
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;