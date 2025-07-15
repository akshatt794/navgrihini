import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  _id?: string;
  id?: string;
  name: string;
  title: string;
  image: string;
  price: number;
  category: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        // Defensive: only set if data is array
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setProducts([]); // Defensive: ensure always an array
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useProducts;
