"use client";

import Image from "next/image";

export default function CustomizedThailandTravel() {
    return (
        <section className="relative w-full bg-white mb-16 sm:mb-20">

            {/* Hero Image */}
            <div className="relative h-[420px] sm:h-[560px] lg:h-[780px] w-full overflow-hidden">
                <Image
                    src="/MS_Herobanner1.jpg"
                    alt="MICE & Corporate Travel"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Floating Content Card */}
            <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 flex justify-center px-4">
                <div
                    className="
            w-full max-w-[92%] sm:max-w-[540px] lg:max-w-[600px]
            rounded-2xl bg-white
            px-6 py-8 sm:px-10 sm:py-10
            text-left
            shadow-[0_12px_40px_rgba(0,0,0,0.10)]
          "
                >
                    {/* TITLE */}
                    <h1
                        className="
              font-playfair
              text-[22px] sm:text-[26px] lg:text-[30px]
              font-semibold
              tracking-tight
              text-gray-900
              text-center
            "
                    >
                        MICE & Corporate Travel Services
                    </h1>

                    <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-green-500/40" />

                    {/* DESCRIPTION LIST */}
                    <div className="mt-6 space-y-4">

                        {/* Item 1 */}
                        <div className="flex items-start gap-3">
                            <Image
                                src="/check-circle-com.svg"
                                alt="Check"
                                width={22}
                                height={22}
                                className="mt-[2px]"
                            />
                            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-600">
                                Professional MICE and corporate travel support including meetings,
                                incentives, conferences, and special event coordination in Thailand.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-3">
                            <Image
                                src="/check-circle-com.svg"
                                alt="Check"
                                width={22}
                                height={22}
                                className="mt-[2px]"
                            />
                            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-600">
                                Our team provides on-ground planning and execution support to ensure
                                smooth and reliable corporate programs.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <div className="mx-auto max-w-7xl mt-16 sm:mt-20 px-4">

                {/* SECTION TITLE */}
                <h2
                    className="
                              text-center
                              font-playfair
                              text-[20px] sm:text-[24px] lg:text-[28px]
                              font-semibold
                              tracking-tight
                              text-gray-900
                          "
                >
                    Sample Program｜Corporate Incentive & Meeting Program in Thailand
                </h2>

                <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-green-500/30" />

                {/* Content */}
                <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

                    {/* LEFT – Steps */}
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
                                A sample MICE program designed to demonstrate our on-ground coordination capabilities for corporate meetings, incentive travel, and special events in Thailand.
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
                                This reference program may include meeting arrangements, incentive activities, accommodation coordination, transportation, and local logistics support. 
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
                                All MICE programs are customized based on group size, objectives, and event requirements. 
                            </p>
                        </div>
                    </div>

                    {/* RIGHT – Image */}
                    <div className="relative z-0 mt-10 lg:mt-0">
                        <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.30)]">
                            <Image
                                src="/MS_Sub.jpg"
                                alt="Cultural Thailand Journey"
                                width={520}
                                height={480}
                                className="h-[320px] sm:h-[400px] lg:h-[480px] w-full object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-[#000000]/30" />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
