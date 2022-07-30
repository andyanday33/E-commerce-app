import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { ICatalogProps } from '../types';

const Catalog: React.FC<ICatalogProps> = ({ products, error }) => {
  return (
    <section className="catalog">
      {error && <p>Failed to fetch data.</p>}
      {!error && !products && <p>Loading...</p>}
      {!!products&& (
        <List>
          {products.map(product => (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <Avatar src={product.imageUrl}/>
              </ListItemAvatar>
              <ListItemText>{product.name} - {product.price}</ListItemText>
            </ListItem>
            ),
          )}
        </List>)
      }
    </section>
  )
}

export default Catalog;
