import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f4d2a] text-white font-sans">

      {/* Top Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="mb-4 text-xl font-semibold tracking-wide font-heading">
            ThaiSTour
          </h3>
          <p className="text-sm leading-relaxed text-white/50">
            Top #1 Tour Booking Service in Thailand. <br />
            Book premium experiences with local support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-semibold tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Gallery", href: "/gallery" },
              { name: "About Us", href: "/about-us" },
              { name: "For Oversea Partners", href: "oversea-partner" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white/80 transition hover:text-white/95"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}


        <div>
          <h4 className="mb-4 font-semibold tracking-wide">
            Services
          </h4>

          <ul className="space-y-2 text-sm text-white/80">

            <li>
              <Link
                href="/travel-service"
                className="hover:text-white/95 transition cursor-pointer block"
              >
                Customized Thailand Travel
              </Link>
            </li>

            <li>
              <Link
                href="/golf-service"
                className="hover:text-white/95 transition cursor-pointer block"
              >
                Golf Tour Solutions
              </Link>
            </li>

            <li>
              <Link
                href="/mice-service"
                className="hover:text-white/95 transition cursor-pointer block"
              >
                MICE & Corporate Travel Services
              </Link>
            </li>

            <li>
              <Link
                href="/transportation-service"
                className="hover:text-white/95 transition cursor-pointer block"
              >
                Transportation & On-ground Logistics
              </Link>
            </li>

            <li>
              <Link
                href="/local-service"
                className="hover:text-white/95 transition cursor-pointer block"
              >
                Local Coordination & Supplier Management
              </Link>
            </li>

          </ul>
        </div>


        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold tracking-wide">
            Connect With Us
          </h4>
          <p className="mb-6 text-sm text-white/80">
            Email:{" "}
            <a
              href="mailto:info@thaistour.com"
              className=" hover:text-white/95 transition"
            >
              info@thaistour.com
            </a>
          </p>

          {/* QR Images */}
          <div className="flex gap-4">
            {[
              { src: "/qr_line.png", label: "Line QR" },
              { src: "/qr_wechat.png", label: "WeChat QR" },
              { src: "/qr_whatsapp.png", label: "WhatsApp" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-white rounded-md overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-xs text-white/80">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Footer */}
      <div className="py-6 text-center text-sm text-white/70">
        © 2025 ThaiSTour. All rights reserved.
      </div>
    </footer>
  );
}
