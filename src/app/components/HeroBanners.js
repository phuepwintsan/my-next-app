import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background image */}
      <Image
        src="/herobanner.jpg"
        alt="Discover Thailand"
        fill
        priority
        className="object-cover"
      />

      {/* TOP fade (THIS fixes your red-highlight area) */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/45 to-transparent z-20" />

      {/* Full soft overlay */}
      <div className="absolute inset-0 bg-white/30 z-20" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <p className="text-lg tracking-[0.25em] text-white uppercase mb-4">
          Discover
        </p>

        <div className="w-full max-w-5xl bg-white/20 backdrop-blur-md py-2">
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900">
            Thailand
          </h1>
        </div>
      </div>

      {/* Bottom white feature strip (SECOND FIGURE STYLE) */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto py-6 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

              {/* Travel */}
              <div className="flex flex-col items-center gap-2">
                <img src="/travel.svg" alt="Travel" className="w-8 h-8 opacity-80" />
                <span className="text-sm font-medium text-gray-800">Travel</span>
              </div>

              {/* Golf */}
              <div className="flex flex-col items-center gap-2">
                <img src="/golf.svg" alt="Golf" className="w-8 h-8 opacity-80" />
                <span className="text-sm font-medium text-gray-800">Golf</span>
              </div>

              {/* Tour */}
              <div className="flex flex-col items-center gap-2">
                <img src="/tour.svg" alt="Tour" className="w-8 h-8 opacity-80" />
                <span className="text-sm font-medium text-gray-800">Tour</span>
              </div>

              {/* Transportation */}
              <div className="flex flex-col items-center gap-2">
                <img src="/transportation.svg" alt="Transportation" className="w-8 h-8 opacity-80" />
                <span className="text-sm font-medium text-gray-800">Transportation</span>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>


  );
} 
