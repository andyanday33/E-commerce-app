import React from 'react';
import { ICatalogProps } from '../types';

export const Catalog : React.FC<ICatalogProps> = ({ products, error }) => {
  return (
    <section className="catalog">
        {error && <p>Failed to fetch data.</p>}
        {!error && !products && <p>Loading...</p>}
        {!!products&& (
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <p>{product.name}</p>
              </li>
              ),
            )}
          </ul>)
        }
    </section>
  )
}
