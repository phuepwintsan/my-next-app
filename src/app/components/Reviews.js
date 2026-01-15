import Image from "next/image";

const testimonials = [
  {
    name: "David L",
    image: "/pf_1.jpg",
    review:
      "Excellent service from start to finish. Transportation was punctual and comfortable.",
  },
  {
    name: "Arial",
    image: "/pf_3.jpg",
    review:
      "Well-planned services and easy communication. It made our trip stress-free and enjoyable.",
  },
  {
    name: "Sophia",
    image: "/pf_22.jpg",
    review:
      "Great experience overall with friendly support. I would highly recommend this service to anyone visiting Thailand.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
            Trusted by travelers worldwide through verified Google reviews
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group flex flex-col items-center
                rounded-2xl border border-gray-100 bg-gray-50
                px-8 py-10 text-center
                transition
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* Avatar */}
              <div className="mb-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="text-base font-semibold text-gray-900">
                {item.name}
              </h4>

              {/* Stars */}
              <div className="mt-2 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-sm text-yellow-400"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-relaxed text-gray-600 italic">
                “{item.review}”
              </p>

              {/* Google Icon */}
              <div className="mt-8">
                <Image
                  src="/google.svg"
                  alt="Google Review"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
