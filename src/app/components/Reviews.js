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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-3">
            Trusted by travelers worldwide through verified Google reviews
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="font-semibold text-gray-900">
                {item.name}
              </h4>

              {/* ⭐ Stars */}
              <div className="flex justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed italic">
                “{item.review}”
              </p>

              {/* Google Icon */}
              <div className="flex justify-center mt-6">
                <Image
                  src="google.svg"
                  alt="Google Review"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
