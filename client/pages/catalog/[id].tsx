import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import useSWR, { Fetcher } from "swr";
import { IProduct } from "../../types";

type Props = {};

const fetcher: Fetcher<IProduct, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const CatalogProduct = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error } = useSWR(
    `http://localhost:5285/Products/${id}`,
    fetcher
  );
  if (!product && !error) return <Typography>Loading...</Typography>;
  if (error || !product) return <Typography>Failed to fetch data.</Typography>;
  return (
    <div>
      CatalogProduct #{id} #{product.name}
    </div>
  );
};

export default CatalogProduct;
