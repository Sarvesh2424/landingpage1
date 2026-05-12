import { Sparkles } from "lucide-react";
import Image from "next/image";

function BuiltByExperts() {
  return (
    <>
      <section className="py-12 z-10 pb-120 bg-linear-to-r from-gray-50 to-gray-100 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-start text-4xl mt-10  mb-2 font-medium">
            Built by Experts in Scalable Digital Products
          </p>
          <p className="text-start text-gray-500">
            We are a product-focused technology company building powerful,
            scalable, and user-centric solutions{" "}
          </p>
          <p className="text-start text-gray-500">
            that help businesses operate smarter and grow faster.
          </p>
        </div>
      </section>
      <div className="relative z-20 -mt-24 md:-mt-100">
        <Image
        src="/Dashboard.svg"
        alt="Dashboard"
        width={2000}
        height={1400}
        loading="eager"
        className="mx-auto z-50 w-auto h-auto rounded-lg shadow-lg"
      />
      </div>
      
      <section className="z-10 pt-120 -mt-100 pb-20 bg-linear-to-br from-orange-200  to-blue-200 relative overflow-hidden">
        <div className="absolute -top-16 -right-24 w-96 h-96 rounded-full bg-indigo-100 opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-purple-100 opacity-40 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 mt-10 text-center relative">
          <div className="text-4xl md:text-3xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4  mx-auto">
            <p className="text-4xl">Transform your HR operations with a smarter platform</p>
          </div>

          <p className="text-neutral-500 mt-8 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Start using a system designed to simplify processes, improve
            efficiency, and support your team's growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href="#"
              className="flex items-center justify-center gap-2 border border-gray-200 px-6 py-3 rounded-lg text-sm font-medium text-white bg-black"
            >
              Sign up for free
            </a>
            <a
              href="#"
              className="bg-neutral-400 text-black px-6 py-3 rounded-lg font-medium text-sm"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuiltByExperts;
