import React, { useState } from "react";
import { JOB_LISTINGS } from "@/constants";
import { Card } from "@/components/common/Card";
import FiltersSidebar from "./FiltersSidebar";

const JobsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const jobsPerPage = 6;

  const filteredJobs = JOB_LISTINGS.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="p-12 max-w-7xl mx-auto">
      {/* 🔍 Search & Filters - Top Bar */}
     <div className="mb-6 flex flex-wrap justify-center sm:justify-start gap-3">
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search for jobs..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-60 sm:w-80 border px-4 py-2 rounded "
  />

  {/* Filter Button (visible only on mobile) */}
  <button
    onClick={() => setShowFilters(true)}
    className="sm:hidden text-sm px-4 py-2 border rounded text-teal-600 hover:bg-teal-50"
  >
    Filters
  </button>
</div>


      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* 📦 Sidebar (desktop only) */}
        <aside className="hidden lg:block border rounded p-4 sticky top-4 h-fit bg-[#309689]/10">
          <FiltersSidebar />
        </aside>

        {/* 📃 Main Content */}
        <main>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <p className="text-gray-600">
              Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} results
            </p>
            <select className="border px-3 py-2 rounded">
              <option value="latest">Sort by latest</option>
              <option value="salary">Sort by salary</option>
            </select>
          </div>

          <div className="flex flex-col gap-6">
            {currentJobs.map((job) => (
              <Card key={job.id} job={job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-teal-600 hover:bg-teal-50"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-9 h-9 border rounded flex items-center justify-center ${
                  currentPage === index + 1
                    ? "bg-teal-600 text-white"
                    : "bg-white text-teal-600 hover:bg-teal-50"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-teal-600 hover:bg-teal-50"
              }`}
            >
              Next
            </button>
          </div>
        </main>
      </div>

      {/* 🔲 Slide-in filter panel for mobile */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end lg:hidden">
          <div className="w-3/4 max-w-sm bg-white h-full p-4 shadow-lg overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                Close
              </button>
            </div>
            <FiltersSidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsPage;
