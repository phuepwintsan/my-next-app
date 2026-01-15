import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f4d2a] text-white">

      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ThaisTour</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Top #1 Tour Booking Service in Thailand. <br />
            Book premium courses with ease and local support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">Our Services</Link></li>
            <li><Link href="#">Transportation Service</Link></li>
            <li><Link href="#">Review & Gallery</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="#">Member Registration</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Membership</li>
            <li>Partner</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <p className="text-sm text-white/80 mb-6">
            Email: info@thaistour.com
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
      <div className="border-t border-white/30"></div>

      {/* Bottom footer */}
      <div className="py-6 text-center text-sm text-white/80">
        © 2025 ThaiSTour. All rights reserved.
      </div>

    </footer>
  );
}
