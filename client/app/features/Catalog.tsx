import React from "react";
import useSWR, { Fetcher } from "swr";
import { IProduct } from "../types";
import ProductList from "./ProductList";

const fetcher: Fetcher<IProduct[], string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Catalog: React.FC = () => {
  const { data: products, error } = useSWR(
    "http://localhost:5285/Products",
    fetcher
  );

  return (
    <section className="catalog">
      {error && <p>Failed to fetch data.</p>}
      {!error && !products && <p>Loading...</p>}
      {!!products && <ProductList products={products} />}
    </section>
  );
};

export default Catalog;
