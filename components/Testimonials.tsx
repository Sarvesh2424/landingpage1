import { ChevronLeft, ChevronRight, StarIcon } from "lucide-react";
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
    <section className="py-16 relative bg-[#15141B] text-white">
      <div
        className="absolute top-4 left-2/3 -translate-x-2/3 w-auto md:w-150 h-100 
              bg-[radial-gradient(ellipse_at_center,#1e3a5f_0%,transparent_100%)] 
              opacity-30 blur-2xl pointer-events-none"
      ></div>
      <div 
    className="absolute bottom-0 left-30 w-100 h-100 
               bg-[radial-gradient(ellipse_at_center,#1e3a5f_0%,transparent_100%)] 
               opacity-30 blur-2xl"
  />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mt-10 mb-10">
          <h2 className="text-2xl md:text-5xl font-semibold text-[#C2C4C8] mb-4">
            Don't take our word for it.
          </h2>
          <p className="text-[#C2C4C8] text-5xl font-semibold">
            Over 100+ people trust us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-15 mt-20 ">
          {testimonials.map(({ name, role, text, stars }) => (
            <div
              key={name}
              className={`bg-linear-to-l from-[#21323A] max-w-screen  to-[#181F23] backdrop-blur-2xl border  border-gray-700 rounded-lg p-5 ${name === "James L." && "md:scale-120"}`}
            >
              <p className="text-white text-sm font-semibold mb-4 leading-relaxed">
                "{text}"
              </p>
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-2 items-center">
                  <div className="w-auto h-auto rounded-full bg-indigo-700 flex items-center justify-center text-xs font-bold">
                    <Image
                      src="/UserIcon.svg"
                      width={16}
                      height={16}
                      alt="User icon"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg text-[#C2C4C8] font-semibold">
                      {name}
                    </p>
                    <p className="text-[10px] text-[#C2C4C8">{role}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3 px-1 bg-[#49565D] p-1 rounded-full">
                  {Array.from({ length: stars }).map((_, i) => (
                    <StarIcon fill="#FFC250" strokeWidth={1} key={i} className="h-3 w-3" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-12 w-2/3 justify-end">
          <button className=" p-2 rounded-full w-10 h-10 border border-[#A4EFFB] text-[#A4EFFB]">
            <ChevronLeft />
          </button>
          <button className=" p-2 rounded-full border w-10 h-10 border-[#A4EFFB] text-[#A4EFFB]">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
