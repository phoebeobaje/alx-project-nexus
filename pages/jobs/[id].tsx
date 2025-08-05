// pages/jobs/[id].tsx
import { useRouter } from "next/router";
import { JOB_LISTINGS } from "@/constants";
import Link from "next/link";
import { CheckCircle, MapPin, Briefcase, Clock, DollarSign, Tag } from "lucide-react";
import { useState } from "react";
import ApplicationModal from "@/components/common/ApplicationModal";


const JobDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const job = JOB_LISTINGS.find((job) => job.id === Number(id));

  if (!job) {
    return <div className="text-center py-12">Job not found</div>;
  }

  return (
    <>
    <section className="max-w-7xl mx-auto p-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
      {/* Main Content */}
      <div>
        <div className="mb-6">
          <Link href="/jobs" className="text-sm text-teal-600 hover:underline">
            ← Back to jobs
          </Link>
        </div>

        <div className="flex items-start gap-4">
          {/* <div className="w-16 h-16 relative">
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-contain rounded"
            />
          </div> */}
          <div>
            <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1 text-teal-600"><Briefcase size={16} /> {job.type}</span>
              <span className="flex items-center gap-1 text-teal-600"><DollarSign size={16} /> {job.salary}</span>
              <span className="flex items-center gap-1 text-teal-600"><MapPin size={16} /> {job.location.city}, {job.location.country}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8 text-gray-700">
          {/* Job Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p>{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Key Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Professional Skills</h2>
            <ul className="space-y-2">
              {job.qualifications?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="text-[#309689]" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Tags:</h2>
            <div className="flex flex-wrap gap-2">
              {job.category.map((cat) => (
                <span key={cat} className="bg-[#309689]/10 text-[#309689] px-3 py-1 text-sm rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>


        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <button  onClick={() => setShowModal(true)} className="w-full bg-primary text-white py-3 rounded hover:bg-teal-700 transition cursor-pointer">
          Apply Job
        </button>

        <div className="bg-[#309689]/10 border border-teal-100 rounded p-4 space-y-4 shadow-sm">
          <h3 className="font-semibold text-lg border-b pb-2">Job Overview</h3>
          <div className="space-y-3 text-sm text-gray-700">
    <div>
      <div className="flex items-center gap-2 font-medium">
        <Briefcase size={16} className="text-[#309689]" />
        Job Title:
      </div>
      <p className="ml-6">{job.title}</p>
    </div>
    <div>
      <div className="flex items-center gap-2 font-medium">
        <Clock size={16} className="text-[#309689]" />
        Job Type:
      </div>
      <p className="ml-6">{job.type}</p>
    </div>

    <div>
      <div className="flex items-center gap-2 font-medium">
        <Tag size={16} className="text-[#309689]" />
        Category:
      </div>
      <p className="ml-6">{job.category.join(", ")}</p>
    </div>

    <div>
      <div className="flex items-center gap-2 font-medium">
        <Briefcase size={16} className="text-[#309689]" />
        Experience:
      </div>
      <p className="ml-6">{job.experienceLevel}</p>
    </div>

    <div>
      <div className="flex items-center gap-2 font-medium">
        <DollarSign size={16} className="text-[#309689]" />
        Offered Salary:
      </div>
      <p className="ml-6">{job.salary}</p>
    </div>

    <div>
      <div className="flex items-center gap-2 font-medium">
        <MapPin size={16} className="text-[#309689]" />
        Location:
      </div>
      <p className="ml-6">
        {job.location.city}, {job.location.country}
      </p>
    </div>
  </div>
            </div>

        <div className="bg-white border rounded p-4 shadow-sm ">
          <h3 className="font-semibold text-lg border-b pb-2 mb-4">Send Us Message</h3>
          <form className="space-y-3">
            <input type="text" placeholder="Full Name" className="w-full border px-3 py-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border px-3 py-2 rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full border px-3 py-2 rounded" />
            <textarea placeholder="Your Message" className="w-full border px-3 py-2 rounded" rows={3} />
            <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
              Send Message
            </button>
          </form>
        </div>
      </aside>
    </section>
    <ApplicationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default JobDetailsPage;