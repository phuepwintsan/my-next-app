"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Tour", "Golf", "Transportation", "Activities"];

const galleryData = [
  { src: "/T1.jpg", title: "Golden Temple Experience", category: "Tour" },
  { src: "/T2.jpg", title: "Adventure Photography Journey", category: "Tour" },
  { src: "/T3.jpg", title: "Scenic Cave & Lagoon Exploration", category: "Activities" },
  { src: "/T4.jpg", title: "Vibrant Night City Exploration", category: "Tour" },
  { src: "/T5.jpg", title: "Private Van Travel Experience", category: "Transportation" },
  { src: "/T6.jpg", title: "Local Tuk-Tuk Street Ride", category: "Transportation" },

  { src: "/T7.jpg", title: "Luxury Golf Lifestyle", category: "Golf" },
  { src: "/T8.jpg", title: "Urban Skytrain Commute", category: "Transportation" },
  { src: "/T9.jpg", title: "Cultural Dance Performance", category: "Activities" },
  { src: "/T10.jpg", title: "Luxury Bus Transportation Service", category: "Transportation" },
  { src: "/T11.jpg", title: "Scenic Golf Course Experience", category: "Golf" },
  { src: "/T12.jpg", title: "Mountain Heritage Landmark", category: "Tour" },

  { src: "/T13.jpg", title: "Traditional Temple Devotion", category: "Tour" },
  { src: "/T14.jpg", title: "Driving Range Golf Practice", category: "Golf" },
  { src: "/T15.jpg", title: "Sacred Spirit House Offering", category: "Tour" },
  { src: "/T16.jpg", title: "Cultural Exchange Experience", category: "Activities" },
  { src: "/T17.jpg", title: "Local Tuk-Tuk City Ride", category: "Transportation" },
  { src: "/T18.jpg", title: "River Rafting Adventure", category: "Activities" },

  { src: "/T19.jpg", title: "Wildlife Elephant Encounter", category: "Tour" },
  { src: "/T20.jpg", title: "Hua Hin City Landmark", category: "Tour" },
  { src: "/T21.jpg", title: "Island Snorkeling Escape", category: "Activities" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [modal, setModal] = useState(null);

  const filtered =
    active === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === active);

  return (
    <section className="w-full pt-6 pb-20 px-4 md:px-8 lg:px-14">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Gallery
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-500">
          Discover Luxury Tours, Golf & Transportation
        </p>
      </div>

      {/* ===== FILTER (HORIZONTAL SCROLL ON MOBILE) ===== */}
      <div className="mb-8">
        <div className="flex justify-center gap-1 sm:gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition
          ${active === item
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>



      {/* ===== GRID (DESKTOP LOGIC, MOBILE SIMPLE) ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((item, index) => (
          <Card
            key={index}
            image={item}
            onClick={() => setModal(item)}
          />
        ))}
      </div>

      {/* ===== FULLSCREEN MODAL ===== */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setModal(null)}
        >
          <div className="relative w-[90vw] max-w-4xl aspect-[16/10]">
            <Image
              src={modal.src}
              alt={modal.title}
              fill
              className="object-contain rounded-xl"
            />
            <p className="absolute bottom-4 left-4 text-white text-sm font-semibold">
              {modal.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= CARD ================= */

function Card({ image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl bg-black group cursor-pointer"
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
        <div className="p-3 text-white text-sm font-semibold">
          {image.title}
        </div>
      </div>
    </div>
  );
}
