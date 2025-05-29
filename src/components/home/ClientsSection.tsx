import React from 'react';
import { clients } from '../../data/clients';

const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-accent font-medium mb-2 block">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted By Innovative Companies</h2>
          <p className="text-gray-600 text-lg">
            We've helped startups across various industries build exceptional teams that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <a
              key={client.id}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="card group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-white p-4 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;