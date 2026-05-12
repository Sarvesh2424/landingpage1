import { PersonStanding } from "lucide-react";
import Image from "next/image";

function CompleteSystem() {
  const cards = [
    {
      title: "People Management",
      desc: "Centralize employee data, org charts, and documents in one place.",
    },
    {
      title: "Workforce Operations",
      desc: "Track attendance, leaves, and timesheets with clear operational control",
    },
    {
      title: "Performance & Growth",
      desc: "Enable goal setting, reviews, and continuous feedback for employee development",
    },
    {
      title: "Recruitment",
      desc: "Handle hiring workflows from job posting to onboarding",
    },
     {
      title: "Support & Documents",
      desc: "Manage HR requests, policies, and employee documents in one place",
    },
  ];
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl mt-12 text-pink-200 md:text-4xl font-bold mb-3">
            A complete HR system for your organization
          </h2>
          <p className="text-gray-400/90 mt-8 max-w-2xl mx-auto">
            Structured modules designed to handle every stage of the employee
            lifecycle efficiently.
          </p>
        </div>

        <Image
          src="/Dashboard.svg"
          width={100}
          height={10}
          alt="Dashboard preview"
          className="w-auto h-auto mt-20 "
        />

        {/* Feature cards */}
        <div className="grid grid-cols-1  mt-12 lg:grid-cols-2 gap-y-16 gap-4">
          {cards.map(({ title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className=" p-4 h-max rounded-lg bg-neutral-600 flex items-center justify-center mb-3">
                <PersonStanding/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-medium mb-1">{title}</p>
                <p className="text-lg text-neutral-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompleteSystem;
