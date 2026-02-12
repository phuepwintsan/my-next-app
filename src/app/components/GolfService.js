"use client";

import Image from "next/image";
import { useState } from "react";

export default function CustomizedThailandTravel() {

  const images = [
    "/GS_1.jpg",
    "/GS_2.jpg",
    "/GS_3.jpg",
    "/GS_4.jpg",
    "/GS_5.jpg",
    "/GS_6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-white">

      {/* ================= HERO ================= */}
      <div className="relative h-[420px] sm:h-[560px] lg:h-[780px] w-full overflow-hidden">
        <Image
          src="/Golf_HeroBanner.jpg"
          alt="Golf Tour Solutions"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Floating Card */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 flex justify-center px-4">
        <div className="w-full max-w-[560px] rounded-3xl bg-white px-10 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <h1 className="text-[28px] sm:text-[32px] font-semibold tracking-tight text-gray-900">
            Golf Tour Solutions
          </h1>

          <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-green-500/30" />

          <p className="mt-6 text-[16px] leading-[1.8] text-gray-600">
            Comprehensive golf travel planning including tee time arrangements,
            golf course coordination, transportation, and accommodation support.
          </p>
        </div>
      </div>

      {/* ================= EXPLORE SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">

        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Explore Professional{" "}
          <span className="text-green-600">Golf Travel</span> Solutions
        </h2>

        <div className="w-12 h-[2px] bg-green-500/30 mx-auto mt-4 rounded-full" />

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Professional golf travel services covering major golf courses across Thailand.
        </p>

        {/* Slider */}
        <div className="relative mt-14 flex items-center justify-center">

          {/* LEFT */}
          <button onClick={prevSlide} className="absolute left-0 z-20">
            <Image
              src="/left-circle-com.svg"
              alt="Left"
              width={48}
              height={48}
              className="hover:scale-105 transition"
            />
          </button>

          <div className="relative flex items-center justify-center w-full max-w-5xl h-[320px] overflow-hidden">

            {images.map((img, index) => {

              const isActive = index === currentIndex;
              const isLeft =
                index === (currentIndex - 1 + images.length) % images.length;
              const isRight =
                index === (currentIndex + 1) % images.length;

              return (
                <div
                  key={index}
                  className={`
                    absolute transition-all duration-500 ease-in-out
                    ${isActive ? "scale-100 opacity-100 z-10" : ""}
                    ${isLeft ? "scale-90 opacity-60 -translate-x-[55%]" : ""}
                    ${isRight ? "scale-90 opacity-60 translate-x-[55%]" : ""}
                    ${!isActive && !isLeft && !isRight ? "opacity-0 scale-75" : ""}
                  `}
                >
                  <div className="rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.18)] w-[420px] h-[260px]">
                    <Image
                      src={img}
                      alt=""
                      width={800}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              );
            })}

          </div>

          {/* RIGHT */}
          <button onClick={nextSlide} className="absolute right-0 z-20">
            <Image
              src="/right-circle-com.svg"
              alt="Right"
              width={48}
              height={48}
              className="hover:scale-105 transition"
            />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="bg-green-700 hover:bg-green-800 transition text-white px-10 py-3 rounded-full font-medium">
            Explore Golf Solutions
          </button>
        </div>

      </div>

      {/* ================= SAMPLE PROGRAM SECTION ================= */}
      <section className="bg-[#F3FFF0] py-10">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-[24px] sm:text-[28px] font-semibold text-gray-900">
            Sample Program | Thailand Golf & Leisure Program
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-green-500/30" />

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT STEPS */}
           <div className="space-y-6 sm:space-y-8 lg:space-y-10 relative z-10">
           
                                   {/* Step 1 */}
                                   <div
                                       className="
                                           flex items-start gap-4
                                           rounded-2xl bg-white p-5 sm:p-6
                                           shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                                           max-w-full sm:max-w-[680px] lg:max-w-[730px]
                                           mr-0 lg:-mr-28
                                       "
                                   >
                                       <Image src="/Num_1.svg" alt="Step 1" width={32} height={32} />
                                       <p className="font-inter text-[14px] sm:text-[15px] leading-[1.75] text-gray-700">
                                           A reference golf travel program integrating selected golf courses, comfortable accommodation, and smooth transportation arrangements. 
                                       </p>
                                   </div>
           
                                   {/* Step 2 */}
                                   <div
                                       className="
                                           flex items-start gap-4
                                           rounded-2xl bg-white p-5 sm:p-6
                                           shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                                           max-w-full sm:max-w-[680px] lg:max-w-[730px]
                                           mr-0 lg:-mr-28
                                       "
                                   >
                                       <Image src="/Num_2.svg" alt="Step 2" width={32} height={32} />
                                       <p className="font-inter text-[14px] sm:text-[15px] leading-[1.75] text-gray-700">
                                           Suitable for leisure golfers, incentive groups, or premium golf travel programs. 
                                       </p>
                                   </div>
           
                                   {/* Step 3 */}
                                   <div
                                       className="
                                           flex items-start gap-4
                                           rounded-2xl bg-white p-5 sm:p-6
                                           shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                                           max-w-full sm:max-w-[680px] lg:max-w-[730px]
                                           mr-0 lg:-mr-28
                                       "
                                   >
                                       <Image src="/Num_3.svg" alt="Step 3" width={32} height={32} />
                                       <p className="font-inter text-[14px] sm:text-[15px] leading-[1.75] text-gray-700">
                                           Golf courses, tee times, and program details are fully customized. 
                                       </p>
                                   </div>
                               </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
                <Image
                  src="/Golf_sub.jpg"
                  alt="Thailand Golf Program"
                  width={600}
                  height={500}
                  className="h-[360px] lg:h-[480px] w-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </section>
  );
}
