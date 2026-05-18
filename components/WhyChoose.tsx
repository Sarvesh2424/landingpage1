import { CheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function WhyChoose() {
  const reasons = [
    "AI-powered HR automation for efficiency",
    "Easy-to-use interface for all users",
    "Scalable for growing organizations",
    "Centralized workforce management",
    "Real-time analytics and insights",
  ];
  return (
    <section className="py-16  bg-linear-to-bl max-w-full  from-blue-300 to-orange-200 overflow-x-hidden">
      <div className=" mx-auto gap-12 items-center">
        <div className="w-full justify-between">
          <div className="md:w-2/3 ml-10 flex justify-center">
            <div className="flex flex-col"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full">
            <div className="flex px-4 justify-center w-full">
              <div>
                <h2 className="text-2xl  md:text-4xl font-semibold text-gray-900 mb-3 leading-tight">
                  Why choose our HR platform
                </h2>
                <p className="text-neutral-500">
                  A scalable, intelligent HR system designed to simplify
                  operations, enhance employee{" "}
                </p>
                <p className="text-neutral-500">
                  management, and support organizational growth.
                </p>
                <ul className="space-y-4 mt-12">
                  {reasons.map((r) => (
                    <li key={r} className="flex  flex-col items-start gap-3">
                      <span className="text-2xl text-black font-semibold">
                        {r}
                      </span>
                      <hr className="text-black w-full mb-4" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Image
              src={"WhyChoose.svg"}
              alt="Why Choose"
              width={500}
              height={300}
              className="w-auto h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
