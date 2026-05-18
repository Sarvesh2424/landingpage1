import { Check } from "lucide-react";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      per: "/Month",
      desc: "Perfect for small teams getting started.",
      features: [
        "Employee management",
        "Attendance tracking",
        "Leave management",
      ],
      cta: "Get Started Now",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$19",
      per: "/Month",
      desc: "For growing teams that need more power.",
      features: [
        "Performance tracking",
        "Performance trackin",
        "Advanced reports",
        "AI features"
      ],
      cta: "Get Started Now",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      per: "",
      desc: "Tailored for large organizations.",
      features: [
        "Custom workflows",
        "Advanced analytics",
        "Dedicated support",
        "Unlimited Sharing",
        "Full scalability",
      ],
      cta: "Get Started Now",
      highlighted: false,
    },
  ];
  return (
    <section className="py-16 bg-white max-w-screen ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl mt-12 text-start font-semibold text-gray-900">
            Simple, flexible pricing for every team
          </h2>
          <p className="text-neutral-500  text-start mt-2">
            Choose a plan that fits your organization's size and operational
            needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-16 mb-16 gap-6">
          {plans.map(
            ({ name, price, per, desc, features, cta, highlighted }) => (
              <div
                key={name}
                className={` relative p-6 flex flex-col ${highlighted ? "bg-linear-to-bl rounded-2xl from-[#B3D1FF] to-[#FFDEC1] text-white shadow-blue-200 shadow-xl " : "border-gray-100 rounded-md bg-[#F4F4F4] shadow-sm"}`}
              >
                {highlighted && (
                  <div className="inline-block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 bg-white text-black border border-black shadow-lg  font-bold px-4 rounded-full mb-3 self-start">
                    Most Popular
                  </div>
                )}
                <p
                  className={` font-semibold mt-2 text-lg mb-1 text-black`}
                >
                  {name}
                </p>
                <div className="flex items-end gap-1 mt-4 mb-1">
                  <span
                    className={`text-6xl font-medium ${highlighted ? "text-black" : "text-gray-900"}`}
                  >
                    {price}
                  </span>
                  {per && (
                    <span
                      className={`text-sm mb-1 ${highlighted ? "text-neutral-500" : "text-neutral-500"}`}
                    >
                      {per}
                    </span>
                  )}
                </div>
                <button
                  className={`w-full py-2.5 mt-4 rounded-sm text-sm font-medium ${highlighted ? "bg-white text-[#1D4ED8]" : "border border-[#1D4ED8] text-[#1D4ED8]"}`}
                >
                  {cta}
                </button>
                <ul className="space-y-2 mb-6 mt-8 flex-1">
                  {features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3  ${highlighted ? "text-neutral-600" : "text-neutral-600"}`}
                    >
                        <div className="rounded-full p-2 text-[#173EAD]   bg-[#E8EDFB]"><Check className="h-4 w-4"/></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
