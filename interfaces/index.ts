// interfaces/index.ts

// Interface for the Card component props
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

// Interface for the Button component props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}


// job interface
export interface JobListing {
  title: string;
  company: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  salary: string;
  type: string;
  category: string[];
  experienceLevel: string;
  description: string;
  logo: string;
  postedAt: string;
  isFeatured: boolean;
  applyLink: string;
}
