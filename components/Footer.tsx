import { Triangle } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mt-16 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg text-white flex items-center justify-center">
                <Image
                  src="/IconWhite.svg"
                  width={32}
                  height={32}
                  alt="PeopleOS logo"
                  className="h-auto w-auto"
                />
              </div>
              <span className="font-medium text-white text-xl">PeopleOS</span>
            </div>
            <p className="text-sm mt-4 text-neutral-400 leading-relaxed max-w-xs">
              AI-powered HR platform for modern teams.
            </p>
            <div className="bg-neutral-800 mt-8 p-2 flex w-max gap-4 items-center rounded-xl">
              <div className="flex  items-center justify-center gap-2">
                <div className="bg-white rounded-full w-7 h-7 p-2 flex items-center justify-center text-black font-bold">
                  P
                </div>
                <div className="flex-col gap-2">
                  <p className="text-xs text-white">FEATURED ON</p>
                  <p className="text-xl font-medium text-white">Product Hunt</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Triangle fill="white" className="border-0 w-5 h-5" />
                <p className="text-white">372</p>
              </div>
            </div>
            <p className="text-sm mt-8 text-neutral-400">
              © 2025 PeopleOS. All rights reserved.
            </p>
          </div>
          {[
            {
              heading: "Product",
              links: ["Features", "Pricing", "API", "Sign Up", "Log in"],
            },
            {
              heading: "Resources",
              links: ["Help docs", "Quick start guide", "Changelog"],
            },
            {
              heading: "Company",
              links: [
                "About us",
                "Privacy policy",
                "Terms of service",
                "Contact us",
              ],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-lg font-medium text-white mb-3">{heading}</p>
              <ul className="space-y-4">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
