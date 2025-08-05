import { Card } from "@/components/common/Card";
import Link from "next/link";
import {JOB_LISTINGS } from "@/constants";



const CardListing: React.FC = () => {
  return (
    <>
     {/* Listing Section */}
            <section className="mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
                                <Link href="/jobs" className="">View All</Link>
</div>
                <div className="flex flex-col gap-6">
                    {JOB_LISTINGS.map((job) => (
                        <Card key={job.title} job={job} />
                    ))}
                </div>
            </section>
            </>
  );
}
export default CardListing