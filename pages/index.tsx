import React from "react";
import { HERO_BG} from "@/constants";
import CardListing from "@/components/common/CardListing";

const HomePage: React.FC = () => {

    return (
        <>
        
            
<section className="relative bg-cover bg-center h-[100vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${HERO_BG.src})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Sprint Into Your Next Job?
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover exciting opportunities and land your dream role faster with Job Sprint.
        </p>

        <form className="flex flex-wrap md:flex-nowrap gap-2 justify-center bg-white p-3 rounded-lg shadow-lg text-black">
  <input
    type="text"
    placeholder="Job Title or Company"
    className="px-4 py-2 rounded-md border w-full md:w-60"
  />
  <select className="px-4 py-2 rounded-md border w-full md:w-48">
    <option>Select Location</option>
  </select>
  <select className="px-4 py-2 rounded-md border w-full md:w-48">
    <option>Select Category</option>
  </select>
  <button
    type="submit"
    className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 w-full md:w-auto"
  >
    Search
  </button>
</form>

      </div>
    </section>
           
           <CardListing />
        </>
    );
};

export default HomePage;
