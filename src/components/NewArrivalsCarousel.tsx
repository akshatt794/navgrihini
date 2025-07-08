const newArrivals = [
  {
    id: 1,
    name: "Boho Chic Dress",
    price: 1799,
    image: "/images/new1.jpg",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 2299,
    image: "/images/new2.jpg",
  },
  {
    id: 3,
    name: "Cotton Summer Kurti",
    price: 1399,
    image: "/images/new3.jpg",
  },
  {
    id: 4,
    name: "Elegant Party Wear",
    price: 2999,
    image: "/images/new4.jpg",
  },
];

export default function NewArrivalsCarousel() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {newArrivals.map((item) => (
        <div key={item.id} className="min-w-[250px] bg-white rounded shadow p-4">
          <img src={item.image} alt={item.name} className="h-60 w-full object-cover rounded mb-3" />
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-secondaryBrown font-bold">₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}
