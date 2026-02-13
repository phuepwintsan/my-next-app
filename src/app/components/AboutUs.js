"use client";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function AboutSection() {
  return (
    <section className={`${inter.className} w-full bg-[#ffffff] py-20`}>

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== SECTION TITLE ===== */}
        <div className="text-center mb-24">
          <h2 className={`${poppins.className} text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900`}>
            About Us
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            Your Trusted On-Ground Travel Partner in Thailand
          </p>
        </div>

        {/* ===== MAIN LAYOUT ===== */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between">

          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-[48%]">

            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/aboutUs.jpg"
                alt="Travelers"
                width={700}
                height={800}
                className="object-cover w-full h-[560px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-6 py-5">
              <p className={`${poppins.className} text-blue-600 text-lg font-semibold tracking-tight`}>
                10k+
              </p>
              <p className="text-gray-500 text-xs tracking-wide mt-1">
                Rounds arranged
              </p>
            </div>

          </div>

          {/* RIGHT CONTENT CARD */}
          <div className="w-full lg:w-[55%] mt-12 lg:mt-0 lg:-ml-16 relative z-10">

            <div className="bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] px-14 py-16">

              <h3 className={`${poppins.className} text-3xl font-semibold tracking-tight text-gray-900`}>
                Who We Are
              </h3>

              <div className="w-10 h-[2px] bg-blue-600 mt-5 rounded-full" />

              <p className="mt-6 text-gray-600 text-base leading-[1.9]">
                We are a{" "}
                <span className="font-semibold text-gray-900">
                  Thailand-based Destination Management Company (DMC)
                </span>{" "}
                providing professional travel, golf, MICE, and on-ground coordination
                services for international partners.
              </p>

              <ul className="mt-8 space-y-4 text-gray-600 text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  Overseas travel agents & tour operators support
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  Corporate & MICE coordination
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  Nationwide on-ground execution in Thailand
                </li>
              </ul>

               <Link  href="/contact-us"
                className="hover:text-green-800/ transition cursor-pointer block"><button className={`${poppins.className} mt-10 bg-green-500 hover:bg-green-600 text-white text-sm font-medium tracking-wide px-8 py-3 rounded-full transition-all duration-300`}>
               CONTACT NOW 
              </button></Link>

            </div>

          </div>


        </div>

      </div>


      {/* ================= WHAT WE DO ================= */}
      <div className="w-full bg-[#F3F3F3] py-10 mt-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className={`${poppins.className} text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900`}>
            What We Do
            <div className="w-10 h-[2px] bg-blue-500/80 mx-auto mt-4 rounded-full" />
          </h2>

          <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Comprehensive travel, golf, MICE, and on-ground coordination solutions across Thailand.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                icon: "/airplane.svg",
                title: "Leisure Travel",
                desc: "Bespoke vacations, tours and local experiences.",
              },
              {
                icon: "/location.svg",
                title: "Customized Travel",
                desc: "Leisure travel, golf, MICE, corporate programs, transportation and local coordination.",
              },
              {
                icon: "/golf-icon.svg",
                title: "Golf Programs",
                desc: "Specialized golfing tours, tournaments and tailored golf experiences across Thailand.",
              },
              {
                icon: "/briefcases.svg",
                title: "MICE & Corporate Travel",
                desc: "Meeting, incentive, conference and exhibition management.",
              },
              {
                icon: "/bus.svg",
                title: "Transportation",
                desc: "Comfortable, reliable and safe transport options.",
              },
              {
                icon: "/network.svg",
                title: "Strategic Partnerships",
                desc: "Supplier management and logistics planning.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-8 py-12">
                <Image src={item.icon} alt={item.title} width={48} height={48} className="mx-auto mb-6" />
                <h3 className={`${poppins.className} text-base font-semibold tracking-tight text-gray-900`}>
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>


      {/* ================= HOW WE WORK ================= */}
      <div className="w-full bg-[#ffffff] py-20 relative overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className={`${poppins.className} text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900`}>
            How We Work
          </h2>

          <div className="w-10 h-[2px] bg-blue-600/50 mx-auto mt-4 rounded-full" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-14">

            {[
              {
                title: "Local Execution Partner",
                desc: "We work as a local execution and coordination partner in Thailand.",
              },
              {
                title: "On-Ground Coordination",
                desc: "Our team handles on-ground arrangements including travel coordination, golf programs, MICE services, transportation, accommodation, attractions, and supplier management.",
              },
              {
                title: "Customized Program Delivery",
                desc: "All programs are customized based on partner requirements, group profiles, and market needs.",
              },
            ].map((step, index) => (
              <div key={index}>
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-semibold shadow-md">
                  {index + 1}
                </div>

                <h3 className={`${poppins.className} mt-6 text-base font-semibold tracking-tight text-gray-900`}>
                  {step.title}
                </h3>

                <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}

            {/* Decorative Airplane Line - Left */}
            <div className="absolute bottom-10 left-0 opacity-30">
              <Image src="/plane-line.png" alt="Decorative line" width={300} height={120} />
            </div>

            {/* Decorative Airplane Line - Right */}
            <div className="absolute bottom-10 right-0 opacity-30 rotate-180">
              <Image src="/plane-line.png" alt="Decorative line" width={300} height={120} />
            </div>
          </div>
        </div>

      </div>

      <div className="relative w-full overflow-hidden">

        {/* ===== BACKGROUND IMAGE ===== */}
        <div className="relative h-[520px] sm:h-[600px] lg:h-[650px] w-full">
          <Image
            src="/strength.jpg"
            alt="Our Team"
            fill
            className="object-cover object-center"
          />

          {/* Softer Premium Overlay */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center -mt-28">

            <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center tracking-tight">
              Our Strengths
            </h2>

            {/* Softer underline tone */}
            <div className="w-10 h-[2px] bg-blue-500/70 mt-4 rounded-full" />

            {/* CHECK LIST */}
            <div className="mt-12 max-w-2xl w-full space-y-6 text-white">

              {[
                "Thailand-based on-ground operation",
                "English & Chinese speaking team",
                "Strong local supplier network across Thailand",
                "Experience working with overseas markets",
                "Reliable execution and responsive communication",
                "Our On-ground Team in Thailand",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <Image
                    src="/success.svg"
                    alt="Success"
                    width={22}
                    height={22}
                    className="opacity-90"
                  />
                  <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>


        {/* ===== BOTTOM BLUE CARDS ===== */}
        <div className="relative -mt-20 flex justify-center px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">

            <div className="bg-blue-700/95 text-white rounded-2xl px-10 py-8 shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm">
              <p className="text-sm sm:text-base leading-relaxed text-center text-white/90">
                Our team is based in Thailand, providing day-to-day operational
                support for travel, golf, MICE, transportation, and local coordination programs.
              </p>
            </div>

            <div className="bg-blue-700/95 text-white rounded-2xl px-10 py-8 shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm">
              <p className="text-sm sm:text-base leading-relaxed text-center text-white/90">
                We work closely with overseas partners to ensure smooth communication,
                reliable execution, and consistent service standards throughout each program.
              </p>
            </div>

          </div>
        </div>

      </div>


      {/* ================= LEGAL SECTION ================= */}
      <div className="w-full bg-[#ffffff] mt-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.05)] border border-gray-100 px-12 py-16">

            {/* Title */}
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                Legal & Registration Information
              </h3>
              <div className="w-10 h-[2px] bg-blue-500/80 mx-auto mt-4 rounded-full" />
            </div>

            {/* Content */}
            <div className="space-y-8">

              {[
                {
                  text: (
                    <>
                      <span className="font-semibold text-gray-900">
                        Thai Scenery Tour Co., Ltd.
                      </span>{" "}
                      is a legally registered travel company in Thailand and operates in
                      full compliance with local regulations.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      The company holds a valid{" "}
                      <span className="font-semibold text-gray-900">
                        Tourism Business License
                      </span>{" "}
                      issued by the Tourism Authority of Thailand (TAT), authorizing it
                      to operate as a licensed travel business in Thailand.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Tourism Business License No:{" "}
                      <span className="font-semibold text-blue-600 tracking-wide">
                        21/01005
                      </span>
                    </>
                  ),
                },
                {
                  text: <>Registered and operating in Thailand.</>,
                },
                {
                  text: <>On-ground operational team supporting international travel partners throughout Thailand.</>,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-9 h-9 bg-blue-50/80 rounded-full flex items-center justify-center">
                    <Image
                      src="/shield.svg"
                      alt="Shield"
                      width={16}
                      height={16}
                      className="opacity-80"
                    />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>


    </section>

  );
}
