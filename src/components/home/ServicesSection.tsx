import React from 'react';
import { Code, Users, Rocket, ClipboardCheck } from 'lucide-react';
import { services } from '../../data/services';

const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={24} className="text-blue-accent" />;
      case 'users':
        return <Users size={24} className="text-blue-accent" />;
      case 'rocket':
        return <Rocket size={24} className="text-blue-accent" />;
      case 'clipboard-check':
        return <ClipboardCheck size={24} className="text-blue-accent" />;
      default:
        return <Code size={24} className="text-blue-accent" />;
    }
  };

  return (
    <section id="services" className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-accent font-medium mb-2 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Help Startups Grow</h2>
          <p className="text-gray-600 text-lg">
            We provide tailored recruitment solutions designed specifically for the unique challenges faced by startups and growth-stage companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="card p-6 group hover:border-blue-accent"
            >
              <div className="w-12 h-12 bg-blue-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-accent/20 transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;