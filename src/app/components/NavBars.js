"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-black px-6 py-2 text-[12px] text-white">
        <div className="flex items-center justify-end gap-4">
          <span className="opacity-80">Contact with us:</span>
          <div className="flex items-center gap-3">
            {["whatsapp", "line", "wechat"].map((item) => (
              <a
                key={item}
                className="rounded-full bg-green-500 p-2 transition hover:bg-green-600"
              >
                <Image src={`/${item}.svg`} alt={item} width={12} height={12} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar (Sticky for mobile) */}
      <nav className="sticky top-0 z-50 bg-gray-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={140}
              height={55}
              className="object-contain"
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 text-[14px] font-medium tracking-wide">
              <NavLink href="/" pathname={pathname}>
                Home
              </NavLink>

              <Link
                href="/services"
                className={`group relative flex items-center gap-1 transition
                  ${
                    pathname === "/services"
                      ? "text-blue-600 font-semibold"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
              >
                Our Services
                <Image
                  src="/dropdown.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                <Underline />
              </Link>
              <NavLink href="/gallery" pathname={pathname}>
                Gallery
              </NavLink>
              <NavLink href="/about-us" pathname={pathname}>
                About Us
              </NavLink>
            </div>

            {/* Right Menu */}
            <div className="hidden md:flex items-center space-x-5 text-[14px] font-medium tracking-wide">
              <NavLink href="/register" pathname={pathname}>
                Member Registration
              </NavLink>

              <Link
                href="/contact-us"
                className="rounded-lg bg-green-500 px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-green-600"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <span className="text-2xl font-semibold">×</span>
              ) : (
                <Image src="/3line.svg" alt="menu" width={28} height={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
  <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">

    <MobileNavLink href="/" pathname={pathname} onClick={() => setOpen(false)}>
      Home
    </MobileNavLink>

    <MobileNavLink href="/services" pathname={pathname} onClick={() => setOpen(false)}>
      Our Services
    </MobileNavLink>

    <MobileNavLink href="/transportation" pathname={pathname} onClick={() => setOpen(false)}>
      Transportation Service
    </MobileNavLink>

    <MobileNavLink href="/gallery" pathname={pathname} onClick={() => setOpen(false)}>
      Review & Gallery
    </MobileNavLink>

    <MobileNavLink href="/about-us" pathname={pathname} onClick={() => setOpen(false)}>
      About Us
    </MobileNavLink>

    <MobileNavLink href="/register" pathname={pathname} onClick={() => setOpen(false)}>
      Member Registration
    </MobileNavLink>

    {/* CTA */}
    <Link
      href="/contact-us"
      onClick={() => setOpen(false)}
      className="mt-4 flex w-full justify-center rounded-lg
                 bg-green-500 py-3 text-[15px]
                 font-semibold text-white hover:bg-green-600"
    >
      Contact Us
    </Link>
  </div>
)}

      </nav>
    </>
  );
}

/* Desktop Nav Link */
function NavLink({ href, pathname, children }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group relative transition
        ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-800 hover:text-blue-600"
        }`}
    >
      {children}
      <Underline />
    </Link>
  );
}

function Underline() {
  return (
    <span
      className="
        absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600
        transition-all duration-300
        group-hover:w-full
      "
    />
  );
}

function MobileNavLink({ href, pathname, children, onClick }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        block py-2 text-[15px] transition
        ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-800 hover:text-blue-600"
        }
      `}
    >
      {children}
    </Link>
  );
}
