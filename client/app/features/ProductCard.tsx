import React from 'react';
import { IProductCardProps } from '../types';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
        avatar={
          <Avatar
            sx={{bgcolor: 'secondary.main'}}
            variant='rounded'
          >
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: {fontWeight: 'bold', color:'primary.main'}
        }}
    />
    <CardMedia
      component="img"
      height="140"
      sx={{ objectFit: 'contain' }}
      image={product.pictureUrl}
      alt={product.name + ' image'}
    />
    <CardContent>
      <Typography color='secondary' gutterBottom variant="h5" component="section">
        £{(product.price / 100).toFixed(2)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.brand} / {product.type}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add to cart</Button>
      <Button size="small">View</Button>
    </CardActions>
  </Card>
  )
}

export default ProductCard