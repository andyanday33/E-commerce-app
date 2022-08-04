import { List } from '@mui/material';
import React from 'react';
import { IProductListProps } from '../types';
import ProductCard from './ProductCard';

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <List>
      {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ),
      )}
    </List>
  );
}

export default ProductList;