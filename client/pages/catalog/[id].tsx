import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import useSWR, { Fetcher } from "swr";
import { IProduct } from "../../types";
import Image from "next/image";

type Props = {};

const fetcher: Fetcher<IProduct, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const CatalogProduct = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error } = useSWR(
    `http://localhost:5285/Products/${id}`,
    fetcher
  );
  if (!product && !error) return <Typography>Loading...</Typography>;
  if (error || !product) return <Typography>Failed to fetch data.</Typography>;
  return (
    <Grid container spacing={6}>
      <Grid
        item
        xs={12}
        sm={6}
        position="relative"
        sx={{ my: 6 }}
        display="flex"
        justifyContent="center"
      >
        {product.pictureUrl && (
          <Image
            src={product.pictureUrl}
            alt={`product ${product.name} picture`}
            width="500"
            height="500"
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ p: 6 }}>
        <Typography variant="h2" textAlign="center">
          {product.name}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" component="h3" color="secondary.main">
          £{(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer sx={{ pt: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity left in stock</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CatalogProduct;
