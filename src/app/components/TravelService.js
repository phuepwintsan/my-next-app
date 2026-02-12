import Image from "next/image";

export default function CustomizedThailandTravel() {
    return (
        <section className="relative w-full bg-white mb-16 sm:mb-20">

            {/* Hero Image */}
            <div className="relative h-[420px] sm:h-[560px] lg:h-[760px] w-full overflow-hidden">
                <Image
                    src="/Travel_Herobanner.jpg"
                    alt="Customized Thailand Travel"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Floating Content Card */}
            <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 flex justify-center px-4">
                <div
                    className="
                        w-full max-w-[92%] sm:max-w-[520px] lg:max-w-[580px]
                        min-h-[auto] lg:h-[186px]
                        rounded-2xl bg-white
                        px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8
                        text-center
                        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    "
                >
                    {/* HERO TITLE */}
                    <h1
                        className="
                            font-playfair
                            text-[22px] sm:text-[26px] lg:text-[30px]
                            font-semibold
                            leading-tight
                            tracking-tight
                            text-gray-900
                        "
                    >
                        Customized Thailand Travel
                    </h1>

                     <div className="mx-auto mt-4 h-[2px] w-10 rounded-full bg-green-00/40" />

                    {/* HERO DESCRIPTION */}
                    <p
                        className="
                            mt-4 sm:mt-6
                            font-inter
                            text-[14px] sm:text-[15px]
                            leading-[1.75] sm:leading-[1.8]
                            text-gray-600
                        "
                    >
                        <span className="font-poppins font-medium text-gray-800">
                            Tailor-made
                        </span>{" "}
                        itineraries covering leisure travel, cultural experiences, and
                        special interest programs{" "}
                        <span className="font-poppins font-medium text-gray-800">
                            across Thailand
                        </span>.
                    </p>
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
                    Sample Program | Cultural & Leisure Thailand Journey
                </h2>

                <div className="mx-auto mt-2 h-[2px] w-16 bg-blue-500/20" />

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
                                <span className="font-poppins font-medium text-gray-900">
                                    A customized Thailand
                                </span>{" "}
                                travel program combining major city highlights, cultural
                                experiences, and relaxed leisure time.
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
                                This sample itinerary is designed to demonstrate our ability
                                to coordinate routes, attractions, accommodation, and
                                on-ground logistics based on partner requirements.
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
                                <span className="font-poppins font-medium text-gray-900">
                                    All programs
                                </span>{" "}
                                are tailor-made according to market needs, group profile, and
                                travel objectives.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT – Image */}
                    <div className="relative z-0 mt-10 lg:mt-0">
                        <div className="overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.30)]">
                            <Image
                                src="/Travel_Sub.jpg"
                                alt="Cultural Thailand Journey"
                                width={520}
                                height={480}
                                className="h-[320px] sm:h-[400px] lg:h-[480px] w-full object-cover"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-[#D7D7D7]/20" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
