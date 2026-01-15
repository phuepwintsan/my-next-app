import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">

      {/* Background image */}
      <Image
        src="/herobanner.jpg"
        alt="Discover Thailand"
        fill
        priority
        className="object-cover"
      />

      {/* Top fade (nav separation) */}
      <div className="absolute top-0 left-0 z-20 h-44 w-full bg-gradient-to-b from-black/50 to-transparent" />

      {/* Soft global overlay */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow text */}
        <p className="mb-5 text-sm font-medium tracking-[0.35em] text-white/90 uppercase md:text-base">
          Discover
        </p>

        {/* Main title */}
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl font-semibold leading-tight text-white
                         sm:text-5xl md:text-7xl lg:text-8xl">
            Thailand
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
          Premium travel, golf, and tour experiences across Thailand
        </p>
      </div>

      {/* Bottom Feature Strip */}
      <div className="absolute bottom-0 left-0 z-30 w-full">
        <div className="bg-white/85 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">

              <Feature icon="/travel.svg" label="Travel" />
              <Feature icon="/golf.svg" label="Golf" />
              <Feature icon="/tour.svg" label="Tour" />
              <Feature icon="/transportation.svg" label="Transportation" />

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

/* Feature item */
function Feature({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={icon}
        alt={label}
        className="h-8 w-8 opacity-80"
      />
      <span className="text-sm font-medium tracking-wide text-gray-800">
        {label}
      </span>
    </div>
  );
}
 