import { StarIcon } from "lucide-react";
import Image from "next/image";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "CEO of Apples to Oranges",
      text: "Our HR operations became faster, more organized, and easier to manage with this platform.",
      stars: 5,
    },
    {
      name: "James L.",
      role: "CEO of Apples to Oranges",
      text: "Our HR operations became faster, more organized, and easier to manage with this platform.",
      stars: 5,
    },
    {
      name: "Priya M.",
      role: "CEO of Apples to Oranges",
      text: "Our HR operations became faster, more organized, and easier to manage with this platform.",
      stars: 5,
    },
  ];
  return (
    <section className="py-16 relative bg-[#0d1117] text-white">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100 
              bg-[radial-gradient(ellipse_at_center,#1e3a5f_0%,transparent_70%)] 
              opacity-60 blur-2xl pointer-events-none"
      ></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mt-10 mb-10">
          <h2 className="text-2xl md:text-5xl font-semibold text-slate-300 mb-4">
            Don't take our word for it.
          </h2>
          <p className="text-slate-300 text-5xl font-semibold">
            Over 100+ people trust us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-15 mt-20 ">
          {testimonials.map(({ name, role, text, stars }) => (
            <div
              key={name}
              className={`bg-gray-800 backdrop-blur-2xl border border-gray-700 rounded-xl p-5 ${name === "James L." && "scale-120"}`}
            >
              <p className="text-white font-semibold mb-4 leading-relaxed">
                "{text}"
              </p>
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center text-xs font-bold">
                    <Image
                      src="/UserIcon.svg"
                      width={16}
                      height={16}
                      alt="User icon"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-neutral-400 font-semibold">
                      {name}
                    </p>
                    <p className="text-[10px] text-gray-500">{role}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3 bg-neutral-500 p-1 rounded-full border border-gray-50">
                  {Array.from({ length: stars }).map((_, i) => (
                    <StarIcon fill="yellow" key={i} className="h-3 w-3" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-12 w-2/3 justify-end">
          <button className=" p-2 rounded-full w-10 h-10 border border-green-400 text-green-400">
            {"<"}
          </button>
          <button className=" p-2 rounded-full border w-10 h-10 border-green-400 text-green-400">
            {" "}
            {">"}{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
