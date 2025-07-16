import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fresh Arrival",
    image: "/images/shopby/fresh-arrival.jpg",
    link: "/shop/fresh-arrival",
  },
  {
    name: "Kurtas",
    image: "/images/shopby/kurtas.jpg",
    link: "/shop/kurtas",
  },
  {
    name: "Co-Ord Sets",
    image: "/images/shopby/co-ord-sets.jpg",
    link: "/shop/co-ord-sets",
  },
  {
    name: "Bestsellers",
    image: "/images/shopby/bestsellers.jpg",
    link: "/shop/bestsellers",
  },
  {
    name: "Suit Set",
    image: "/images/shopby/suit-set.jpg",
    link: "/shop/suit-set",
  },
  {
    name: "Tie Dye",
    image: "/images/shopby/tie-dye.jpg",
    link: "/shop/tie-dye",
  },
  {
    name: "Luxe",
    image: "/images/shopby/luxe.jpg",
    link: "/shop/luxe",
  },
  {
    name: "Tunics",
    image: "/images/shopby/tunics.jpg",
    link: "/shop/tunics",
  },
];

export default function ShopByCollection() {
  return (
    <section className="py-16 px-3 bg-[#fcf6ee]">
      <h2 className="text-5xl font-serif font-bold text-center mb-14 tracking-wide text-[#374151]">
        SHOP BY COLLECTION
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-14 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.link}
            className="flex flex-col items-center group"
          >
            <div className="w-56 h-56 rounded-full shadow-xl bg-white overflow-hidden mb-6 border-4 border-white group-hover:shadow-2xl transition-all">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                draggable={false}
                onError={e => (e.currentTarget.src = "/images/placeholder.jpg")}
              />
            </div>
            <span className="text-2xl font-serif font-semibold text-[#374151] group-hover:text-[#a67c52] transition-all tracking-wide">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
