import { CheckIcon } from "lucide-react";
import Image from "next/image";

function AIFeatures() {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className=" flex justify-between items-center">
        <div className="flex  flex-col w-full items-center">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col">
            <h2 className="text-4xl  font-semibold text-gray-900 mb-4 leading-tight">
              AI that supports
              <br />
              your HR team
            </h2>
            <p className=" text-[#555555] text-start leading-relaxed">
              Leverage intelligent automation to simplify HR operations and{" "}
            </p>
            <p className=" text-start text-[#555555] mb-6 leading-relaxed">
              make faster decisions
            </p>
            <ul className="space-y-3">
              {[
                "AI assistant for HR queries and quick actions",
                "Smart attendance tracking with anomaly detection",
                "Automated leave and approval recommendations",
                "AI-driven performance insights and trends",
                "Employee engagement and behavioral insights",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3  text-[#555555]"
                >
                  <CheckIcon className="text-black" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Image
          src="/AIFeat1.svg"
          width={100}
          height={10}
          alt="Feature 1"
          className="w-auto h-auto"
          loading="eager"
        />
      </div>
      <div className=" h-30"></div>
      <div className=" flex justify-between items-center">
        <div className="flex  flex-col w-full items-center">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col">
            <h2 className="text-4xl  font-semibold text-gray-900 mb-4 leading-tight">
              Designed to improve
              <br />
              your HR efficiency
            </h2>
            <p className=" text-[#555555] leading-relaxed">
              Built to eliminate manual processes and{" "}
            </p>
            <p className=" text-[#555555] mb-6 leading-relaxed">
              bring clarity to workforce management.
            </p>
            <ul className="space-y-3">
              {[
                "Reduce manual HR work",
                "Improve employee experience",
                "Increase team productivity",
                "Ensure policy compliance",
                "Gain real-time workforce visibility",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3  text-[#555555]"
                >
                  <CheckIcon className="text-black" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Image
          src="/AIFeat2.svg"
          width={100}
          height={10}
          alt="Feature 1"
          className="w-auto h-auto"
          loading="eager"
        />
      </div>
    </section>
  );
}

export default AIFeatures;
