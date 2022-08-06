import React from "react";
import useSWR, { Fetcher } from "swr";
import { IProduct } from "../../types";
import ProductList from "../../components/ProductList";
import { Container, Typography } from "@mui/material";

const fetcher: Fetcher<IProduct[], string> = (...args) =>
  fetch(...args).then((res) => res.json());

const Catalog: React.FC = () => {
  const { data: products, error } = useSWR(
    "http://localhost:5285/Products",
    fetcher
  );

  return (
    <main>
      <Container>
        <Typography variant="h2" textAlign="center" sx={{ mb: "4" }}>
          Product Catalog
        </Typography>
        <section className="catalog">
          {error && <p>Failed to fetch data.</p>}
          {!error && !products && <p>Loading...</p>}
          {!!products && <ProductList products={products} />}
        </section>
      </Container>
    </main>
  );
};

export default Catalog;
