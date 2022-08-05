import React from 'react';
import { IProductCardProps } from '../types';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={product.pictureUrl}
      alt={product.name + ' image'}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.brand} - {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard