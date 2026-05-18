import { Sparkles } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <>
      <section className="pt-28 z-10 md:pb-100 pb-50 bg-linear-to-br from-[#B3D1FF] max-w-screen to-[#FFDEC1]  relative overflow-hidden">
        {/* Soft blobs */}
        {/* <div className="absolute -top-16 -right-24 md:w-96 h-96 rounded-full bg-indigo-100 opacity-50 blur-3xl pointer-events-none" /> */}
        {/* <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-purple-100 opacity-40 blur-3xl pointer-events-none" /> */}

        <div className="max-w-6xl mx-auto px-4 mt-10 text-center relative">
          <div className="inline-flex items-center gap-2  border border-blue-400 rounded-full px-3 py-1 text-xs text-indigo-600 font-medium mb-6 shadow-sm">
            <Sparkles />
            <p className="text-line bg-linear-to-bl from-blue-500 to-orange-300 bg-clip-text text-transparent text-lg">
              AI-Powered Platform
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4  mx-auto">
            <p>Transform Workforce</p>
            <p>Management with an Intelligent,</p>{" "}
            <div className="flex md:w-full gap-4 items-center justify-center">
              <Image
                src="/AILogo.svg"
                alt="AI Logo"
                width={50}
                height={50}
                className="h-auto w-auto"
              />{" "}
              <p className="text-start md:text-center md:w-max w-min">Powered HR Platform</p>
            </div>
          </h1>

          <p className="text-black text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Manage headcount, automate HR processes, and generate real-time
            insights — all from one intelligent platform built for modern teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="#"
              className="bg-[#0000000F] text-black px-6 py-2 rounded-lg font-medium"
            >
              Contact us
            </a>
            <a
              href="#"
              className="flex items-center justify-center border py-2 md:py-0 z-30 border-gray-200 px-6 rounded-lg  font-medium text-white bg-black"
            >
              Sign up for free
            </a>
          </div>
        </div>
      </section>
      <div className="relative z-30 -mt-24 md:-mt-100">
        <Image
          src="/Dashboard.svg"
          alt="Dashboard"
          width={2000}
          height={1400}
          loading="eager"
          className="mx-auto z-50 w-auto h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute mt-24 inset-0 pointer-events-none z-20">
        <Image
          src="/Lines.svg"
          alt="Lines"
          width={1959}
          height={2222}
          className="w-auto h-auto "
        />
      </div>

      <section className="py-12 z-10 pt-120 -mt-100 bg-linear-to-r from-gray-50 to-gray-100 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-4xl  mb-2 font-medium">
            Trusted by growing teams to manage people,{" "}
          </p>
          <p className="text-center text-4xl mt-0 mb-6 font-medium">
            processes, and performance
          </p>
          <p className="text-center text-gray-500">
            Polymer's built with productivity at heart and is loaded with
            features to help you{" "}
          </p>
          <p className="text-center text-gray-500">
            hire more effectively. It's quick to learn, fast to navigate, and
            empowering to use.{" "}
          </p>
          <div className="flex flex-wrap items-center mt-16 justify-center gap-16 mb-8">
            {[
              {
                value: "500+",
                label: "Organizations",
                image: "/codicon_organization.svg",
              },
              {
                value: "10+",
                label: "Industries served",
                image: "/solar_buildings-2-broken.svg",
              },
              {
                value: "4.9/5",
                label: "Organization",
                image: "/solar_star-broken.svg",
              },
            ].map(({ value, label, image }) => (
              <div key={label} className="text-center">
                <div className="flex items-center gap-2">
                  <Image
                    src={image}
                    alt={label}
                    width={50}
                    height={50}
                    className="w-auto h-auto"
                  />
                  <div className="text-5xl font-bold text-gray-900">
                    {value}
                  </div>
                </div>

                <div className="mt-2">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center mb-4 mt-20 gap-8 opacity-50">
            <Image
              src="/Companies.svg"
              alt="Companies"
              width={2000}
              height={400}
              loading="eager"
              className="h-auto w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
