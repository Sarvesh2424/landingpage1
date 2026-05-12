import { Check } from "lucide-react";
import Image from "next/image";

function FeaturesList() {
  const features = [
    "Attendance Tracking",
    "Employee Management",
    "Leave Management",
    "Payroll Management",
    "Recruitment & Hiring",
    "Performance Management",
  ];
  return (
    <section className="py-16 bg-linear-to-bl from-orange-200 to-blue-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full">
            <h2 className="text-2xl mt-8 md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Everything you need to manage your workforce
            </h2>
            <div className="flex w-full mt-16 justify-between">
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li
                    key={f}
                    className={`flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition-colors ${i === 0 ? "font-bold text-3xl" : "text-2xl"}`}
                  >
                    <span className="ont-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="w-1/2"><Image
                src="/FeatureCard.svg"
                width={100}
                height={10}
                alt="Feature preview"
                className="w-full h-auto rounded-lg shadow-lg"
              /></div>
              
            </div>
          </div>
          {/* Feature preview card */}
        </div>
      </div>
    </section>
  );
}

export default FeaturesList;
