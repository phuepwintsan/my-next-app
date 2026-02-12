"use client";
import Image from "next/image";

export default function TransportationHero() {

    const stats = [
        { number: "20,000+", label: "Corporate Trips Managed" },
        { number: "7,500+", label: "Program Participants" },
        { number: "12,000+", label: "Transfers Completed" },
        { number: "1,200+", label: "Corporate Clients Served" },
    ];

    return (
        <section className="relative w-full bg-white">

            {/* ================= HERO ================= */}
            <div className="relative h-[420px] sm:h-[560px] lg:h-[760px] w-full overflow-hidden">
                <Image
                    src="/TP_HeroBanner.jpg"
                    alt="Transportation & Logistics"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Floating Card */}
            <div className="relative -mt-20 sm:-mt-24 flex justify-center px-4">
                <div className="w-full max-w-[720px] rounded-3xl bg-white px-10 py-12 text-center shadow-[0_30px_60px_rgba(0,0,0,0.12)]">

                    <h1 className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold tracking-tight text-gray-900">
                        Transportation & On-ground Logistics
                    </h1>

                    <div className="mx-auto mt-6 h-[2px] w-14 rounded-full bg-green-600/40" />

                    <p className="mt-6 text-[16px] leading-[1.9] text-gray-600 max-w-2xl mx-auto">
                        Reliable transportation and on-ground logistics services including
                        airport transfers, intercity travel, group transportation, and
                        dedicated vehicle arrangements.
                    </p>

                </div>
            </div>


            {/* ================= STATS ================= */}
            <section className="w-full bg-[#f8fafc] py-16 mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                        {stats.map((item, index) => (
                            <div key={index} className="space-y-3">
                                <h3 className="text-4xl sm:text-5xl font-semibold text-green-700 tracking-tight">
                                    {item.number}
                                </h3>
                                <p className="text-gray-500 text-sm sm:text-base">
                                    {item.label}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================= VEHICLE TYPES ================= */}
            <section className="w-full bg-[#F6F7F8] py-28">

                <div className="max-w-6xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-semibold tracking-tight text-gray-900">
                            Vehicle Types
                        </h2>

                        <div className="w-14 h-[2px] bg-green-600/40 mx-auto mt-6 rounded-full" />

                        <p className="mt-6 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
                            Reliable transportation solutions tailored for corporate and MICE travel needs.
                        </p>
                    </div>


                    {/* Vehicle List */}
                    <div className="mt-24 space-y-28">

                        {/* CARD 1 */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">

                            <div className="rounded-3xl overflow-hidden shadow-md">
                                <Image
                                    src="/van.jpg"
                                    alt="Standard Van"
                                    width={600}
                                    height={400}
                                    className="w-full h-[320px] object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl lg:text-[28px] font-semibold text-gray-900">
                                    Standard Van
                                </h3>

                                <p className="mt-4 text-sm font-medium text-green-700 tracking-wide">
                                    Small groups & flexible routing
                                </p>

                                <p className="mt-6 text-gray-600 leading-[1.9]">
                                    Perfect for small corporate groups, offering flexible routing and
                                    comfortable transfers for daily movements and short-distance travel.
                                </p>
                            </div>

                        </div>


                        {/* CARD 2 */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">

                            <div className="order-2 lg:order-1">
                                <h3 className="text-2xl lg:text-[28px] font-semibold text-gray-900">
                                    VIP Van
                                </h3>

                                <p className="mt-4 text-sm font-medium text-green-700 tracking-wide">
                                    Premium groups & executive travel
                                </p>

                                <p className="mt-6 text-gray-600 leading-[1.9]">
                                    Ideal for executive guests and premium groups, providing enhanced
                                    comfort, privacy, and a seamless travel experience.
                                </p>
                            </div>

                            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-md">
                                <Image
                                    src="/vipvan.jpg"
                                    alt="VIP Van"
                                    width={600}
                                    height={400}
                                    className="w-full h-[320px] object-cover"
                                />
                            </div>

                        </div>


                        {/* CARD 3 */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">

                            <div className="rounded-3xl overflow-hidden shadow-md">
                                <Image
                                    src="/bus.jpg"
                                    alt="Coach Bus"
                                    width={600}
                                    height={400}
                                    className="w-full h-[320px] object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl lg:text-[28px] font-semibold text-gray-900">
                                    Coach / Bus
                                </h3>

                                <p className="mt-4 text-sm font-medium text-green-700 tracking-wide">
                                    Large groups & MICE programs
                                </p>

                                <p className="mt-6 text-gray-600 leading-[1.9]">
                                    Best suited for large groups and MICE programs, ensuring efficient,
                                    coordinated, and reliable transportation for events and conferences.
                                </p>
                            </div>

                        </div>


                        {/* CARD 4 */}
                        <div className="grid lg:grid-cols-2 gap-20 items-center">

                            <div className="order-2 lg:order-1">
                                <h3 className="text-2xl lg:text-[28px] font-semibold text-gray-900">
                                    Sedan / Executive Car
                                </h3>

                                <p className="mt-4 text-sm font-medium text-green-700 tracking-wide">
                                    VIP transfers & business travel
                                </p>

                                <p className="mt-6 text-gray-600 leading-[1.9]">
                                    A professional and discreet option for VIP transfers and business travel,
                                    designed for executives who value comfort and efficiency.
                                </p>
                            </div>

                            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-md">
                                <Image
                                    src="/car.jpg"
                                    alt="Sedan Executive Car"
                                    width={600}
                                    height={400}
                                    className="w-full h-[320px] object-cover"
                                />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </section>
    );
}
