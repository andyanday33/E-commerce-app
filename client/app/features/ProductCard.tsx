import React from 'react';
import { IProductCardProps } from '../types';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={product.pictureUrl}/>
      </ListItemAvatar>
      <ListItemText>{product.name} - {product.price}</ListItemText>
    </ListItem>
  )
}

export default ProductCard