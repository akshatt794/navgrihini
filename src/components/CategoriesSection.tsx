import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fresh Arrival",
    image: "/images/categories/fresh-arrival.jpg", // update to your path
    link: "/shop/Fresh%20Arrival",
  },
  {
    name: "Kurtas",
    image: "/images/categories/kurtas.jpg",
    link: "/shop/Kurtas",
  },
  {
    name: "Co-Ord Sets",
    image: "/images/categories/co-ord.jpg",
    link: "/shop/Co-Ord%20Sets",
  },
  {
    name: "Bestsellers",
    image: "/images/categories/bestsellers.jpg",
    link: "/shop/Bestsellers",
  },
  {
    name: "Suit Set",
    image: "/images/categories/suitset.jpg",
    link: "/shop/Suit%20Set",
  },
  {
    name: "Tie Dye",
    image: "/images/categories/tiedye.jpg",
    link: "/shop/Tie%20Dye",
  },
  {
    name: "Luxe",
    image: "/images/categories/luxe.jpg",
    link: "/shop/Luxe",
  },
  {
    name: "Tunics",
    image: "/images/categories/tunics.jpg",
    link: "/shop/Tunics",
  },
];

export default function CategoriesSection() {
  return (
    <div className="flex flex-wrap justify-center gap-16">
      {categories.map((cat) => (
        <div key={cat.name} className="flex flex-col items-center">
          <Link to={cat.link}>
            <div
              className="rounded-full shadow-lg border-2 border-white overflow-hidden w-48 h-48 mb-3
                         transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="object-cover w-full h-full"
                draggable={false}
              />
            </div>
          </Link>
          <div className="text-xl text-center font-serif text-secondaryBrown font-semibold mt-1">
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
}
