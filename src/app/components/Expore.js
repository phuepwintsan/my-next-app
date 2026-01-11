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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Services
          </h2>
          <p className="text-gray-500 mt-3">
            Complete services. Seamless Planning. Smooth journeys.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition bg-white"
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* White Content Area (LIKE FIRST FIGURE) */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.location}
                </p>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-4 inline-block bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
