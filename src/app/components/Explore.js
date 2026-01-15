import Image from "next/image";

const services = [
  {
    title: "Tour Packages",
    desc: "Carefully planned half-day and one-day experiences",
    image: "/tour_package.jpg",
  },
  {
    title: "Attraction Tickets",
    desc: "Easy access to Thailand’s top attractions",
    image: "/attraction_ticket.jpg",
  },
  {
    title: "Golf Booking Service",
    desc: "Reliable tee time arrangements",
    image: "/golf.jpg",
  },
  {
    title: "Hotel Booking Service",
    desc: "Comfortable stays at trusted hotels",
    image: "/hotel_package.jpg",
  },
  {
    title: "Transportation Service",
    desc: "Safe and punctual travel across destinations",
    image: "/tour_service.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Explore Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
            Complete services. Seamless planning. Smooth journeys across Thailand.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                group overflow-hidden rounded-2xl border border-gray-100
                bg-white transition
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>

                <button
                  className="
                    mt-6 inline-flex items-center
                    text-sm font-medium text-green-600
                    transition hover:text-green-700
                  "
                >
                  View Details
                  <span className="ml-1 transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
