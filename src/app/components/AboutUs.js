import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">

          {/* Text Card */}
          <div className="rounded-xl bg-white p-10 shadow-md">
            <h2 className="mb-5 text-2xl font-semibold text-gray-900 md:text-3xl">
              About Us
            </h2>

            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 md:text-base">
              <strong className="font-semibold text-gray-900">
                ThaiSTour
              </strong>{" "}
              is a professional travel agency and local DMC in Thailand.
              We specialize in tour packages, attraction tickets,
              transportation, and golf booking services. Our team provides
              Chinese and English-speaking support with full coverage across
              Thailand.
            </p>

            <a
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-green-500 px-7 py-3
                         text-sm font-semibold text-white transition hover:bg-green-600"
            >
              CONTACT NOW
            </a>
          </div>

          {/* Image */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-xl shadow-md md:h-[380px]">
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

      {/* Highlights */}
      <section className="bg-gray-100 pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 divide-y rounded-xl bg-white shadow-md md:grid-cols-2 md:divide-x md:divide-y-0">

            {/* Item */}
            <div className="flex items-start gap-4 p-6">
              <div className="text-2xl">🌍</div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Serving Travelers across Thailand
                </h4>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-bold text-green-500">✓</span>
                  Nationwide service in Thailand
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex items-start gap-4 p-6">
              <div className="text-2xl">🗣️</div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  English & Chinese support
                </h4>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-bold text-green-500">✓</span>
                  Bilingual support for travelers
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-lg bg-white p-10 text-center shadow-sm">

            <h3 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
              Our Mission
              <span className="mx-auto mt-3 block h-1 w-12 rounded bg-green-500"></span>
            </h3>

            <p className="text-[15px] leading-relaxed text-gray-600 md:text-base">
              Deliver safe, comfortable, and customized travel services for
              travelers from around the world.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
