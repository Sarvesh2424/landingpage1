import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-8 overflow-x-hidden mx-2 px-4 w-4/5 max-w-screen  md:w-2/3  left-1/2 transform -translate-x-1/2 rounded-xl z-50 bg-white/90 backdrop-blur border-b shadow-lg border-gray-100">
      <div className="max-w-6xl mx-auto  py-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <Image src="/Icon.svg" width={32} height={40} alt="PeopleOS logo" className="h-auto w-auto"/>

          <span className="font-bold text-xl text-gray-900 tracking-tight">
            PeopleOS
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm text-black">
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
        <div className="hidden lg:flex items-center gap-3">
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

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
      </div>
      {open && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3 text-sm text-gray-700 bg-white border-t border-gray-100">
          {["About Us", "Features", "Modules", "Pricing"].map((l) => (
            <a key={l} href="#" className="py-1">
              {l}
            </a>
          ))}
          {/* CTA */}
        <div className="flex items-center gap-3">
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
