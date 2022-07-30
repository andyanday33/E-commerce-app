import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import { IProductListProps } from '../types';

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <List>
      {products.map(product => (
        <ListItem key={product.id}>
          <ListItemAvatar>
            <Avatar src={product.pictureUrl}/>
          </ListItemAvatar>
          <ListItemText>{product.name} - {product.price}</ListItemText>
        </ListItem>
        ),
      )}
    </List>
  );
}

export default ProductList;