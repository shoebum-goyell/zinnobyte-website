export interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  website: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
}