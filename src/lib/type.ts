import { WithId } from "mongodb";

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
  title: string;
  image: string;
  link: string;
  description: string;
  clientCountry: string;
  technologies: string[];
  createdAt?: string;
};

export type UserRole = "Team" | "Admin" | "Unauthorized";

export type User = {
  name: string;
  email: string;
  image: string;
  role: UserRole;
  firebaseUid: string;
  createdAt: string;
  updatedAt: string;
};

export type ProjectWithId = WithId<Project>;
export type UserWithId = WithId<User>;
export type TestimonialWithId = WithId<Testimonial>;
export type TeamWithId = WithId<Team>;
