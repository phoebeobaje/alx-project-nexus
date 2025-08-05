import React from "react";

const FiltersSidebar = () => {
  return (
    <div className="space-y-6 text-sm text-gray-800 ">

      {/* Keyword Search */}
      <div>
        <label className="block font-semibold mb-1">Job Title</label>
        <input
          type="text"
          placeholder="e.g. UI Designer"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block font-semibold mb-1 " >Location</label>
        <select className="w-full px-3 py-2 border rounded bg-white">
          <option>Anywhere</option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Remote</option>
        </select>
      </div>

      {/* Categories */}
      <div>
        <label className="block font-semibold mb-2">Categories</label>
        <div className="space-y-1">
          {["Design", "Development", "Marketing", "Product Management"].map((cat) => (
            <label key={cat} className="block">
              <input type="checkbox" className="mr-2" />
              {cat}
            </label>
          ))}
          {/* <button className="text-teal-600 mt-1 text-xs">Show More</button> */}
        </div>
      </div>

      {/* Job Type */}
      <div>
        <label className="block font-semibold mb-2">Job Type</label>
        <div className="space-y-1">
          {["Full-Time", "Part-Time", "Contract"].map((type) => (
            <label key={type} className="block">
              <input type="checkbox" className="mr-2" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <label className="block font-semibold mb-2">Experience</label>
        <div className="space-y-1">
          {["Entry", "Mid", "Senior"].map((level) => (
            <label key={level} className="block">
              <input type="checkbox" className="mr-2" />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Date Posted */}
      {/* <div>
        <label className="block font-semibold mb-2">Date Posted</label>
        <div className="space-y-1">
          {["Last 24 hours", "Last 7 days", "Last 14 days", "Last 30 days"].map((date) => (
            <label key={date} className="block">
              <input type="radio" name="datePosted" className="mr-2" />
              {date}
            </label>
          ))}
        </div>
      </div> */}

      {/* Salary Range */}
      {/* <div>
        <label className="block font-semibold mb-2">Salary Range (₦)</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 px-3 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 px-3 py-2 border rounded"
          />
        </div>
      </div> */}

      {/* Tags */}
      {/* <div>
        <label className="block font-semibold mb-2">Tags</label>
        <div className="flex flex-wrap gap-2">
          {["Remote", "Urgent", "Internship", "Junior"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs border rounded-full bg-[#30968910] text-[#309689]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div> */}

    </div>
  );
};

export default FiltersSidebar;
