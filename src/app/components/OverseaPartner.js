"use client";

import Image from "next/image";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "600"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function HeroSection() {
    return (
        <section className="w-full">

            {/* ================= HERO ================= */}
            <div className="relative h-[600px] lg:h-[720px] w-full overflow-hidden">

                <Image
                    src="/hotel_city.jpg"
                    alt="Thailand Skyline"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#0F2240]/80 to-[#0F2240]/90" />

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-6xl mx-auto px-6 w-full">

                        <div className="max-w-3xl">

                            <h1
                                className={`${playfair.className}
                text-[42px] sm:text-[56px] lg:text-[68px]
                leading-[1.1]
                text-[#E4C27A]`}
                            >
                                Reliable On-ground DMC
                                <br />
                                Support in Thailand
                            </h1>

                            <p
                                className={`${inter.className}
                mt-8
                text-white/85
                text-[17px]
                leading-[1.9]
                max-w-xl`}
                            >
                                Supporting overseas travel professionals with dependable
                                local coordination and seamless execution across Thailand.
                            </p>

                            <div className="mt-12">
                                <Link
                                    href="/contact-us"
                                    className={`${poppins.className}
                  inline-block
                  bg-[#E4C27A]
                  text-[#0F2240]
                  px-12 py-4
                  rounded-full
                  text-sm
                  font-semibold
                  tracking-wide
                  hover:bg-[#d6b06a]
                  transition-all duration-300`}
                                >
                                    Partner With Us
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ================= WHO WE WORK WITH ================= */}
            <div className="w-full bg-[#F3F4F6] py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2
                        className={`${poppins.className}
            text-[26px] sm:text-[34px]
            font-semibold
            text-gray-900`}
                    >
                        Who We Work With
                    </h2>

                    <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4 rounded-full" />

                    <p
                        className={`${inter.className}
            mt-6
            text-gray-600
            text-[14px] sm:text-[16px]
            leading-[1.9]
            max-w-3xl mx-auto`}
                    >
                        We work with overseas travel agents, tour operators, golf travel
                        specialists, and corporate planners seeking reliable on-ground
                        DMC support in Thailand.
                    </p>

                </div>
            </div>

            <div className="w-full bg-[#F3F4F6] py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT CARD */}
                        <div className="bg-[#EDEDED] rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] px-12 py-14">

                            {/* Title */}
                            <div className="text-center mb-10">
                                <h2
                                    className={`${poppins.className}
                text-[26px] sm:text-[30px]
                font-semibold
                text-gray-900`}
                                >
                                    How We Support Our Partners
                                </h2>

                                <div className="w-8 h-[2px] bg-blue-500 mx-auto mt-4 rounded-full" />
                            </div>

                            {/* List */}
                            <div className={`${inter.className} space-y-6 text-[15px] text-gray-700`}>

                                {[
                                    "Customized itinerary planning based on your market needs",
                                    "On-ground coordination for travel, golf, MICE, and transportation",
                                    "Local supplier management including hotels, venues, and service providers",
                                    "English & Chinese speaking operation support",
                                    "Flexible cooperation models for different markets",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">

                                        {/* Check Icon */}
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                                                <svg
                                                    className="w-3 h-3 text-green-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <p className="leading-relaxed">{item}</p>

                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.15)]">
                                <Image
                                    src="/partner_meeting.jpg"
                                    alt="Partner Meeting"
                                    width={700}
                                    height={520}
                                    className="object-cover w-full h-[500px]"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= WHY PARTNER ================= */}
            <div className="w-full bg-[#F3F4F6] py-10">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className={`${poppins.className} text-[28px] sm:text-[34px] font-semibold text-gray-900`}>
                            Why Partner With Us
                        </h2>

                        <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4 rounded-full" />

                        <p className={`${inter.className} mt-6 text-gray-600 text-[15px] max-w-2xl mx-auto leading-relaxed`}>
                            Strategic local expertise delivering reliable execution across Thailand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                        <div className="space-y-8">
                            <FeatureCard
                                icon="globe"
                                title="Thailand-based DMC operation"
                                description="A locally established Destination Management Company providing direct on-ground expertise and reliable operational control across Thailand."
                            />

                            <FeatureCard
                                icon="location"
                                title="Strong local network and on-ground execution"
                                description="Proven experience supporting overseas travel agents, tour operators, and corporate clients with international service standards."
                            />
                        </div>

                        <div className="flex justify-center">
                            <div className="rounded-2xl overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.15)]">
                                <Image
                                    src="/partner_meeting2.jpg"
                                    alt="Team Meeting"
                                    width={420}
                                    height={520}
                                    className="object-cover w-[380px] h-[500px]"
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <FeatureCard
                                icon="building"
                                title="Experience working with international partners"
                                description="A trusted network of hotels, venues, and service providers supported by hands-on coordination and quality execution."
                            />

                            <FeatureCard
                                icon="org"
                                title="Clear communication and responsive support"
                                description="Transparent communication and prompt support to ensure smooth coordination from planning to execution."
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= HOW WE WORK TOGETHER ================= */}
            <div className="w-full bg-[#14284B] py-28">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    {/* Title */}
                    <h2
                        className={`${poppins.className}
      text-[28px] sm:text-[34px]
      font-semibold
      text-[#E6C47A]`}
                    >
                        How We Work Together
                    </h2>

                    <div className="w-12 h-[2px] bg-[#E6C47A]/60 mx-auto mt-5 rounded-full" />

                    <p
                        className={`${inter.className}
      mt-6
      text-white/70
      text-[15px]
      leading-relaxed`}
                    >
                        Our cooperation process is simple, transparent, and flexible.
                    </p>

                    {/* Timeline */}
                    <div className="relative mt-20">

                        {/* Elegant thin line */}
                        <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-white/30" />

                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

                            <Step
                                number="1"
                                title="Client Requirements"
                                description="You share your program outline and client needs."
                                icon="clipboard"
                            />

                            <Step
                                number="2"
                                title="Planning Support"
                                description="We provide strategic planning and local coordination."
                                icon="map"
                            />

                            <Step
                                number="3"
                                title="On-Ground Execution"
                                description="We manage and execute operations in Thailand."
                                icon="location"
                            />

                            <Step
                                number="4"
                                title="Relationship & Branding"
                                description="You retain full client ownership and branding."
                                icon="handshake"
                            />

                        </div>
                    </div>

                </div>
            </div>


            {/* ================= GET IN TOUCH ================= */}
            <div className="w-full bg-[#F6F3ED] py-18">

                <div className="max-w-4xl mx-auto px-6 text-center">

                    <h2
                        className={`${poppins.className}
            text-[30px] sm:text-[36px]
            font-semibold
            text-[#0F2240]`}
                    >
                        Get in Touch
                    </h2>

                    <div className="w-14 h-[2px] bg-[#E4C27A] mx-auto mt-5 rounded-full" />

                    <p
                        className={`${inter.className}
            mt-8
            text-[#4B5563]
            text-[16px]
            leading-relaxed
            max-w-xl mx-auto`}
                    >
                        Let’s explore partnership opportunities and elevate
                        your Thailand programs together.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">

                        <Link
                            href="/contact-us"
                            className={`${poppins.className}
                bg-[#0F2240]
                text-white
                px-12 py-4
                rounded-full
                text-sm
                font-semibold
                hover:bg-[#09182e]
                transition`}
                        >
                            Contact Us
                        </Link>

                        <Link
                            href="https://wa.me/your-number"
                            target="_blank"
                            className={`${poppins.className}
                border border-[#0F2240]
                text-[#0F2240]
                px-12 py-4
                rounded-full
                text-sm
                font-semibold
                hover:bg-[#0F2240]
                hover:text-white
                transition`}
                        >
                            WhatsApp
                        </Link>


                        <Link
                            href="mailto:info@thaistour.com"
                            className={`${poppins.className}
    border border-[#0F2240]
    text-[#0F2240]
    px-12 py-4
    rounded-full
    text-sm
    font-semibold
    hover:bg-[#0F2240]
    hover:text-white
    transition`}
                        >
                            Email
                        </Link>

                    </div>

                </div>
            </div>


        </section>
    );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm px-8 py-8">
            <div className="flex items-start gap-4">

                <div className="flex-shrink-0 mt-1 text-gray-800">
                    {icon === "globe" && (
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
                        </svg>
                    )}

                    {icon === "location" && (
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                            <path d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" />
                            <circle cx="12" cy="11" r="3" />
                        </svg>
                    )}

                    {icon === "building" && (
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="18" />
                            <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                        </svg>
                    )}

                    {icon === "org" && (
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="2" />
                            <path d="M12 7v4M5 15h14M7 15v4M17 15v4" />
                            <circle cx="7" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                        </svg>
                    )}
                </div>

                <div>
                    <h4 className="font-semibold text-gray-900 text-[15px]">
                        {title}
                    </h4>
                    <p className="mt-3 text-gray-600 text-[14px] leading-relaxed">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
}

function Step({ number, title, description, icon }) {
    return (
        <div className="flex flex-col items-center text-center relative">

            {/* Number Circle */}
            <div className="relative z-10 w-10 h-10 rounded-full bg-white text-[#1F3470] font-semibold flex items-center justify-center mb-10">
                {number}
            </div>

            {/* Icon Circle */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">

                {icon === "clipboard" && (
                    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="12" height="16" rx="2" />
                        <path d="M9 4h6v2H9zM9 10h6M9 14h6M9 18h4" />
                    </svg>
                )}

                {icon === "map" && (
                    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                        <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
                        <path d="M9 4v14M15 6v14" />
                    </svg>
                )}

                {icon === "location" && (
                    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                        <path d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" />
                        <circle cx="12" cy="11" r="3" />
                    </svg>
                )}

                {icon === "handshake" && (
                    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                        <path d="M3 12l5-5 4 4 4-4 5 5" />
                        <path d="M7 16l5-5 5 5" />
                    </svg>
                )}

            </div>

            {/* Text */}
            <h4 className="mt-6 text-white font-semibold text-[15px]">
                {title}
            </h4>

            <p className="mt-3 text-white/70 text-[13px] leading-relaxed max-w-[220px]">
                {description}
            </p>

        </div>
    );
}
