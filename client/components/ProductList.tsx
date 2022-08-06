import { Grid, List } from "@mui/material";
import React from "react";
import { IProductListProps } from "../types";
import ProductCard from "./ProductCard";

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <List>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

export default ProductList;
