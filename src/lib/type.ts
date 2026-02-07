export type Testimonial = {
  image: string;
  review: string;
  country: string;
  company: string;
  position: string;
  createdAt?: string;
};

export type Team = {
  image: string;
  name: string;
  about: string;
  joiningDate: string;
  salary: number;
  createdAt?: string;
};

export type Project = {
  image: string;
  link: string;
  description: string;
  clientCountry: string;
  createdAt?: string;
};
