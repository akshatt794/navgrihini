import React from "react";
import ProductItem from "./ProductItem";
import { nanoid } from "nanoid";

type Product = {
  _id?: string;
  id?: string;
  name: string;
  title: string;
  image: string;
  price: number;
  category: string;
  popularity?: number;
  stock?: number;
};

const ProductGrid = ({ products }: { products?: Product[] }) => {
  return (
    <div
      id="gridTop"
      className="max-w-screen-2xl flex flex-wrap justify-between items-center gap-y-8 mx-auto mt-12 max-xl:justify-start max-xl:gap-5 px-5 max-[400px]:px-3"
    >
      {products &&
        products.map((product: Product) => (
          <ProductItem
            key={product.id || product._id || nanoid()}
            id={product.id || product._id || ""}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            popularity={product.popularity}
            stock={product.stock}
          />
        ))}
    </div>
  );
};

export default React.memo(ProductGrid);
