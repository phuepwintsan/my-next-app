import Image from "next/image";

const reasons = [
  {
    title: "Professional Local DMC",
    desc: "Based in Thailand with trusted local operations",
    icon: "briefcase.svg",
  },
  {
    title: "Language Support",
    desc: "Chinese & English speaking professional team",
    icon: "language.svg",
  },
  {
    title: "Full Coverage",
    desc: "Bangkok, Chiang Mai, Phuket & nationwide",
    icon: "map.svg",
  },
  {
    title: "Reliable Services",
    desc: "Transportation & golf arrangements you can trust",
    icon: "customer.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="mb-14 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Why Choose Us
            </h2>

            <div className="space-y-8">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="
                    group flex items-start gap-6
                    rounded-2xl border border-gray-100
                    bg-gray-50 px-7 py-6
                    transition
                    hover:-translate-y-0.5 hover:shadow-md
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl bg-white shadow-sm
                      transition group-hover:shadow
                    "
                  >
                    <Image
                      src={`/${item.icon}`}
                      alt={item.title}
                      width={22}
                      height={22}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md md:max-w-lg">

              <Image
                src="/map.jpg"
                alt="Thailand Map"
                width={500}
                height={700}
                className="w-full h-auto"
              />

              {/* Chiang Mai */}
              <MapPin
                top="18%"
                left="52%"
                color="bg-blue-600"
                label="Chiang Mai"
              />

              {/* Bangkok */}
              <MapPin
                top="42%"
                left="55%"
                color="bg-red-500"
                label="Bangkok"
              />

              {/* Phuket */}
              <MapPin
                top="78%"
                left="48%"
                color="bg-gray-700"
                label="Phuket"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Map pin component */
function MapPin({ top, left, color, label }) {
  return (
    <div
      className="absolute flex items-center gap-2"
      style={{ top, left }}
    >
      <span className={`h-3 w-3 rounded-full ${color}`} />
      <span className="text-sm font-medium text-gray-800">
        {label}
      </span>
    </div>
  );
}
