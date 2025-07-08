import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  _id?: string;       // Corrected: single underscore
  id?: string;        // In case you map _id to id in backend/frontend
  name: string;       // Make required if all products have name
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
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useProducts;
