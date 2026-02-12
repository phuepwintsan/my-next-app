"use client";
import Image from "next/image";

export default function LocalCoordinationHero() {
    return (
        <section className="relative w-full bg-white mb-20">

            {/* ================= HERO ================= */}
            <div className="relative h-[420px] sm:h-[560px] lg:h-[760px] w-full overflow-hidden">
                <Image
                    src="/LS_HeroBanner.jpg"
                    alt="Local Coordination & Supplier Management"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* FLOATING CARD */}
            <div className="relative -mt-20 flex justify-center px-4">
                <div className="w-full max-w-[760px] rounded-3xl bg-white px-12 py-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
                    <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold tracking-tight text-gray-900">
                        Local Coordination & Supplier Management
                    </h1>

                    <div className="w-8 h-[2px] bg-blue-500/60 mx-auto mt-4 rounded-full" />

                    <p className="mt-6 text-[16px] leading-[1.8] text-gray-600 max-w-2xl mx-auto">
                        Local supplier coordination including hotels, attractions,
                        golf courses, venues, and service providers across Thailand.
                    </p>
                </div>
            </div>

            {/* ================= NETWORK SECTION ================= */}
            <section className="w-full bg-[rgb(231,245,255)] py-12 mt-20">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                        Our Local Coordination Network
                    </h2>

                    <div className="w-8 h-[2px] bg-blue-500/60 mx-auto mt-4 rounded-full" />
                    <p className="mt-6 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
                        A trusted ecosystem of partners working together to deliver seamless programs across Thailand
                    </p>

                    {/* ===== NETWORK BOX ===== */}
                    <div className="mt-12 flex justify-center">
                        <div className="w-full max-w-3xl bg-white border border-[#5B8BD9] rounded-md py-16 px-10 relative">

                            <div className="relative w-full h-[260px] flex items-center justify-center">

                                {/* TOP */}
                                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2">
                                    <Image src="/landmark.svg" alt="Landmark" width={50} height={50} />
                                </div>

                                {/* LEFT (Moved inward) */}
                                <div className="absolute left-[12%] top-1/2 -translate-y-1/2">
                                    <Image src="/building.svg" alt="Building" width={50} height={50} />
                                </div>

                                {/* RIGHT (Moved inward) */}
                                <div className="absolute right-[12%] top-1/2 -translate-y-1/2">
                                    <Image src="/hotel.svg" alt="Hotel" width={50} height={50} />
                                </div>

                                {/* BOTTOM */}
                                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2">
                                    <Image src="/handshake.svg" alt="Handshake" width={55} height={55} />
                                </div>

                                {/* CENTER LOGO CARD */}
                                <div className="bg-white rounded-xl shadow-[0_12px_25px_rgba(0,0,0,0.14)] px-8 py-5">
                                    <Image
                                        src="/logo_Eng.jpg"
                                        alt="Thai Scenery"
                                        width={180}
                                        height={60}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>



                </div>

            </section>
            {/* ===== BOTTOM BLUE BAR ===== */}
            <div className="-mt-1 flex justify-center">
                <div className="bg-blue-700 text-white rounded-2xl py-8 px-16 shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
                    <p className="text-base sm:text-lg font-medium tracking-wide">
                        All suppliers are coordinated and managed to ensure smooth execution and consistent service standards.
                    </p>
                </div>
            </div>


            <div className="w-full py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white border border-gray-100 rounded-xl py-16 px-10 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

                        <div className="relative flex items-center justify-center mb-14">

                            <div className="relative z-0 -mr-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/hotel_1.jpg" alt="Hotel 1" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/hotel_2.jpg" alt="Hotel 2" width={380} height={250} className="object-cover w-[360px] h-[230px]" />
                                </div>
                            </div>

                            <div className="relative z-0 -ml-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/hotel_3.webp" alt="Hotel 3" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                        </div>

                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-sm tracking-[0.3em] font-semibold text-gray-900">HOTELS</h3>
                            <div className="w-8 h-[2px] bg-blue-500/60 mx-auto mt-4 rounded-full" />
                            <p className="mt-6 text-gray-800 text-lg font-medium">
                                City hotels, resorts & boutique properties
                            </p>
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                A curated selection of trusted hotels across Thailand, supporting corporate travel,
                                meetings, and incentive programs.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white border border-gray-100 rounded-xl py-16 px-10 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

                        <div className="relative flex items-center justify-center mb-14">

                            <div className="relative z-0 -mr-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/attraction_1.jpg" alt="Attraction 1" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/attraction_2.jpg" alt="Attraction 2" width={380} height={250} className="object-cover w-[360px] h-[230px]" />
                                </div>
                            </div>

                            <div className="relative z-0 -ml-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/attraction_3.png" alt="Attraction 3" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                        </div>

                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-sm tracking-[0.3em] font-semibold text-gray-900">ATTRACTIONS</h3>
                            <div className="w-8 h-[2px] bg-blue-500/60 mx-auto mt-4 rounded-full" />
                            <p className="mt-6 text-gray-800 text-lg font-medium">
                                Cultural sites, landmarks & local experiences
                            </p>
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                We coordinate access to key cultural attractions, landmarks, and curated local experiences
                                across Thailand, supporting corporate and incentive travel programs.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-full py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white border border-gray-100 rounded-xl py-16 px-10 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

                        <div className="relative flex items-center justify-center mb-14">

                            <div className="relative z-0 -mr-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/venue_1.jpg" alt="Venue 1" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/venue_2.jpeg" alt="Venue 2" width={380} height={250} className="object-cover w-[360px] h-[230px]" />
                                </div>
                            </div>

                            <div className="relative z-0 -ml-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/venue_3.jpg" alt="Venue 3" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                        </div>

                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-sm tracking-[0.3em] font-semibold text-gray-900">VENUES</h3>
                            <div className="w-8 h-[2px] bg-blue-500/60 mx-auto mt-4 rounded-full" />
                            <p className="mt-6 text-gray-800 text-lg font-medium">
                                MICE venues & special event locations
                            </p>
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                We manage a portfolio of professional venues, including conference centers, hotels,
                                and unique event locations suitable for meetings, incentives, and corporate functions.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-full py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white border border-gray-100 rounded-xl py-16 px-10 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

                        <div className="relative flex items-center justify-center mb-14">

                            <div className="relative z-0 -mr-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/provider_1.jpg" alt="Provider 1" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/provider_2.jpg" alt="Provider 2" width={380} height={250} className="object-cover w-[360px] h-[230px]" />
                                </div>
                            </div>

                            <div className="relative z-0 -ml-10">
                                <div className="rounded-2xl overflow-hidden shadow-sm">
                                    <Image src="/provider_3.jpg" alt="Provider 3" width={340} height={220} className="object-cover w-[320px] h-[200px]" />
                                </div>
                            </div>

                        </div>

                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-sm tracking-[0.3em] font-semibold text-gray-900">SERVICE PROVIDERS</h3>
                            <div className="w-8 h-[2px] bg-blue-500/60 mx-auto mt-4 rounded-full" />
                            <p className="mt-6 text-gray-800 text-lg font-medium">
                                Local partners integrated into program operations
                            </p>
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                                We collaborate with trusted local guides and professional activity partners
                                to support tours, team activities, and seamless on-ground program execution.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
