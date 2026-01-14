import Image from "next/image";

export default function AboutUsPage() {
    return (
        <>

            {/* Section Background */}
            <section className="bg-gray-100 py-16">

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Card */}
                    <div className="bg-white rounded-xl shadow-md p-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            About Us
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            <strong>ThaisTour</strong> is a professional travel agency and local
                            DMC in Thailand. We specialize in tour packages, attraction tickets,
                            transportation, and golf booking services. Our team provides
                            Chinese and English-speaking support with full coverage across
                            Thailand.
                        </p>

                        <a
                            href="/contact-us"
                            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition"
                        >
                            CONTACT NOW
                        </a>
                    </div>

                    {/* Right Image Card */}
                    <div className="relative w-full h-[320px] md:h-[380px] shadow-md rounded-xl overflow-hidden">
                        <Image
                            src="/team.jpg"
                            alt="Our Team"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                </div>
            </section>

            <section className="bg-gray-100 pb-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">

                        {/* Left */}
                        <div className="flex items-center gap-4 p-6">
                            <div className="text-3xl">🌍</div>
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    Serving Travelers across Thailand
                                </h4>
                                <p className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                    <span className="text-green-500 font-bold">✓</span>
                                    Nationwide service in Thailand
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4 p-6">
                            <div className="text-3xl">🗣️</div>
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    English & Chinese support
                                </h4>
                                <p className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                    <span className="text-green-500 font-bold">✓</span>
                                    Bilingual support for travelers
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            Our Mission
                            <div className="w-12 h-1 bg-green-500 mx-auto mt-3"></div>
                        </h3>                  

                        <p className="text-gray-600 leading-relaxed">
                            Deliver safe, comfortable, and customized travel services for
                            travelers from around the world.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
