import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-700 pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-accent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-accent blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Connecting <span className="text-blue-accent">Top Talent</span> With Innovative Startups
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              At Zinnobyte, we specialize in helping ambitious startups build exceptional teams that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn btn-primary">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white hover:text-navy-700">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                  <span className="font-semibold text-navy-900">95% Retention Rate</span>
                </div>
                <p className="text-gray-700 text-sm">Our placements stay with companies longer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;