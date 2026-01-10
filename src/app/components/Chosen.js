import Image from "next/image";

const reasons = [
  {
    title: "Professional Local DMC",
    desc: "Based in Thailand, trusted operations",
    icon: "briefcase.svg",
  },
  {
    title: "Language Support",
    desc: "Chinese & English speaking team",
    icon: "language.svg",
  },
  {
    title: "Full Coverage",
    desc: "Bangkok, Chiang Mai, Phuket & more",
    icon: "map.svg",
  },
  {
    title: "Reliable Services",
    desc: "Transport & golf arrangements",
    icon: "customer.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Why Choose Us ?
            </h2>

            <div className="space-y-6">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-white rounded-xl shadow">
                    <Image
                      src={`/${item.icon}`}
                      alt={item.title}
                      width={22}
                      height={22}
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MAP (FULL SIZE) */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md md:max-w-lg">

              {/* Thailand Map */}
              <Image
                src="/map.jpg"
                alt="Thailand Map"
                width={500}
                height={700}
                className="w-full h-auto"
              />

              {/* Chiang Mai */}
              <div className="absolute top-[18%] left-[52%] flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <span className="text-sm font-medium text-gray-800">
                  Chiang Mai
                </span>
              </div>

              {/* Bangkok */}
              <div className="absolute top-[42%] left-[55%] flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-800">
                  Bangkok
                </span>
              </div>

              {/* Phuket */}
              <div className="absolute bottom-[18%] left-[48%] flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
                <span className="text-sm font-medium text-gray-800">
                  Phuket
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
