import React, { ReactElement, useCallback, useEffect, useState } from "react";
import customFetch from "../axios/custom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setShowingProducts,
  setTotalProducts,
} from "../features/shop/shopSlice";

// If not importing, define here:
export type Product = {
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

const ProductGridWrapper = ({
  searchQuery,
  sortCriteria,
  category,
  page,
  limit,
  children,
}: {
  searchQuery?: string;
  sortCriteria?: string;
  category?: string;
  page?: number;
  limit?: number;
  children:
    | ReactElement<{ products: Product[] }>
    | ReactElement<{ products: Product[] }>[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { totalProducts } = useAppSelector((state) => state.shop);
  const dispatch = useAppDispatch();

  const getSearchedProducts = useCallback(
    async (query: string, sort: string, page: number) => {
      if (!query || query.length === 0) {
        query = "";
      }
      const response = await customFetch("/products");
      const allProducts = await response.data;

      let searchedProducts = allProducts.filter((product: Product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      if (category) {
        searchedProducts = searchedProducts.filter((product: Product) => {
          return product.category === category;
        });
      }

      if (totalProducts !== searchedProducts.length) {
        dispatch(setTotalProducts(searchedProducts.length));
      }

      // Sort the products based on the sortCriteria
      if (sort === "price-asc") {
        searchedProducts = searchedProducts.sort(
          (a: Product, b: Product) => a.price - b.price
        );
      } else if (sort === "price-desc") {
        searchedProducts = searchedProducts.sort(
          (a: Product, b: Product) => b.price - a.price
        );
      } else if (sort === "popularity" && allProducts[0]?.popularity) {
        searchedProducts = searchedProducts.sort(
          (a: Product, b: Product) => (b.popularity ?? 0) - (a.popularity ?? 0)
        );
      }

      // Limit the number of products to be displayed
      if (limit) {
        setProducts(searchedProducts.slice(0, limit));
        dispatch(setShowingProducts(searchedProducts.slice(0, limit).length));
      } else if (page) {
        setProducts(searchedProducts.slice(0, page * 9));
        dispatch(setShowingProducts(searchedProducts.slice(0, page * 9).length));
      } else {
        setProducts(searchedProducts);
        dispatch(setShowingProducts(searchedProducts.length));
      }
    },
    [category, limit, page, sortCriteria, totalProducts, dispatch]
  );

  useEffect(() => {
    getSearchedProducts(searchQuery || "", sortCriteria || "", page || 1);
    // eslint-disable-next-line
  }, [searchQuery, sortCriteria, page, category, limit]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && products.length > 0) {
      return React.cloneElement(child, { products: products });
    }
    return null;
  });

  return <>{childrenWithProps}</>;
};

export default ProductGridWrapper;
