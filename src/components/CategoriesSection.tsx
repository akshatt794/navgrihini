import React from "react";

const categories = [
  {
    name: "Special Edition",
    image: "/images/special-edition.jpg", // Replace with your image paths
  },
  {
    name: "Summer Edition",
    image: "/images/summer-edition.jpg",
  },
  {
    name: "Luxury Collection",
    image: "/images/luxury-collection.jpg",
  },
  {
    name: "Unique Collection",
    image: "/images/unique-collection.jpg",
  },
];

export default function ShopCategoriesSection() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Shop by Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative rounded-2xl overflow-hidden shadow-lg group transition-transform hover:scale-105"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-60 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100">
              <span className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
