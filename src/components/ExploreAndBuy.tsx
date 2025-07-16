// src/components/ExploreAndBuy.tsx
import { Link } from "react-router-dom";

const exploreItems = [
  {
    name: "Kurta Sets",
    image: "/images/explore-kurta.jpg",
    link: "/shop/Kurta Sets",
  },
  {
    name: "Sarees",
    image: "/images/explore-saree.jpg",
    link: "/shop/Sarees",
  },
  {
    name: "Tunic Tops",
    image: "/images/explore-tunic.jpg",
    link: "/shop/Tunic Tops",
  },
  {
    name: "Co-Ord Sets",
    image: "/images/explore-coord.jpg",
    link: "/shop/Co-Ord Sets",
  },
  {
    name: "Bestsellers",
    image: "/images/explore-bestseller.jpg",
    link: "/shop/Bestsellers",
  },
  {
    name: "Luxe",
    image: "/images/explore-luxe.jpg",
    link: "/shop/Luxe",
  },
];

export default function ExploreAndBuy() {
  return (
    <section className="py-20 bg-white px-5">
      <h2 className="text-4xl font-semibold text-center mb-12 font-serif">
        Explore &amp; Buy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {exploreItems.map((item) => (
          <div key={item.name} className="relative group overflow-hidden rounded-xl shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[270px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300">
              <span className="text-2xl font-semibold text-white mb-4 drop-shadow">{item.name}</span>
              <Link
                to={item.link}
                className="bg-white text-black px-6 py-2 rounded-full font-medium shadow hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
