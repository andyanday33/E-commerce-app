import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { ICatalogProps } from '../types';
import ProductList from './ProductList';

const Catalog: React.FC<ICatalogProps> = ({ products, error }) => {
 
  return (
    <section className="catalog">
      {error && <p>Failed to fetch data.</p>}
      {!error && !products && <p>Loading...</p>}
      {!!products&& <ProductList products={products}/>}
    </section>
  )
}

export default Catalog;
