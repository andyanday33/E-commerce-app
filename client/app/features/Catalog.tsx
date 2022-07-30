import { Typography } from '@mui/material';
import React from 'react';
import { ICatalogProps } from '../types';

const Catalog: React.FC<ICatalogProps> = ({ products, error }) => {
  return (
    <section className="catalog">
        {error && <p>Failed to fetch data.</p>}
        {!error && !products && <p>Loading...</p>}
        {!!products&& (
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Typography variant="body1">{product.name}</Typography>
              </li>
              ),
            )}
          </ul>)
        }
    </section>
  )
}

export default Catalog;
