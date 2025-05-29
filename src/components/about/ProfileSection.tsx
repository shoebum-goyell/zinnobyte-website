import React from 'react';
import { Linkedin, Mail, User, Briefcase, Award } from 'lucide-react';
import { teamMembers } from '../../data/team';

const ProfileSection: React.FC = () => {
  const member = teamMembers[0]; // Using the first team member

  return (
    <section className="section-spacing pt-32 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-navy-700 h-48 relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>
            
            <div className="pt-20 pb-8 px-8 text-center">
              <h1 className="text-3xl font-bold text-navy-900 mb-1">{member.name}</h1>
              <p className="text-gray-600 mb-4">{member.position}</p>
              
              <div className="flex justify-center space-x-4 mb-8">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 hover:bg-navy-700 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:shweta.goyal@zinnobyte.com" 
                  className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 hover:bg-navy-700 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-700 mb-6">{member.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-full mx-auto mb-3">
                      <User size={20} className="text-navy-700" />
                    </div>
                    <h3 className="font-medium text-navy-900 mb-1">Experience</h3>
                    <p className="text-gray-600 text-sm">15+ Years</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-full mx-auto mb-3">
                      <Briefcase size={20} className="text-navy-700" />
                    </div>
                    <h3 className="font-medium text-navy-900 mb-1">Placements</h3>
                    <p className="text-gray-600 text-sm">500+ Successful</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-full mx-auto mb-3">
                      <Award size={20} className="text-navy-700" />
                    </div>
                    <h3 className="font-medium text-navy-900 mb-1">Industries</h3>
                    <p className="text-gray-600 text-sm">Tech & Startups</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <a href="/#contact" className="btn btn-primary">
                    Work With Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;