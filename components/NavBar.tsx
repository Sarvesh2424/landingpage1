import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-8 w-2/3 left-1/2 transform -translate-x-1/2 rounded-xl z-50 bg-white/90 backdrop-blur border-b shadow-lg border-gray-100">
      <div className="max-w-6xl mx-auto  py-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <Image src="/Icon.svg" width={32} height={32} alt="PeopleOS logo" className="h-auto w-auto"/>

          <span className="font-bold text-xl text-gray-900 tracking-tight">
            PeopleOS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-black">
          {["About Us", "Features", "Modules", "Pricing"].map((l) => (
            <a
              key={l}
              href="#"
              className="hover:text-indigo-600 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-black bg-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            Log In
          </a>
          <a
            href="#"
            className="text-sm bg-black text-white px-4 py-2 rounded-lg  transition-colors font-medium"
          >
            Sign Up
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm text-gray-700 bg-white border-t border-gray-100">
          {["Features", "Pricing", "About", "Blog", "Sign In"].map((l) => (
            <a key={l} href="#" className="py-1">
              {l}
            </a>
          ))}
          <a
            href="#"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center font-medium"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
