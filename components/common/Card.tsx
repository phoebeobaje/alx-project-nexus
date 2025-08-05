// components/common/Card.tsx
import React from "react";
import Link from "next/link";

export interface JobListing {
  id:number;
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

interface CardProps {
  job: JobListing;
}

export const Card: React.FC<CardProps> = ({ job }) => {
  const location = `${job.location.city}, ${job.location.state}, ${job.location.country}`;

  return (
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition border">
      <div className="p-4">
        {/* Top tag */}
        <div className="text-[#309689] bg-[#309689]/10 text-sm px-2 py-1 rounded inline-block mb-2">
          {job.postedAt}
        </div>

        {/* Title and Company */}
        <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{job.company}</p>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-2">{location}</p>

        {/* Job details */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-4 text-sm text-gray-600 mt-3">
            <span>💼 {job.type}</span>
            <span>📈 {job.experienceLevel}</span>
            <span>💰 {job.salary}</span>
          </div>

          <Link
            href={`/jobs/${job.id}`}
            className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary-dark"
          >
            Job Details
          </Link>
        </div>
      </div>
    </div>
  );
};
