import { Box, Typography } from "@mui/material";
import ProductCard from "../Components/ProductCard";
import products from "../db";

function productsList() {
  return (
    <Box
      sx={{
        backgroundColor: "pink",
        borderRadius: 1,
        p: 2,
        m: 1,
      }}
    >
      <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
        Products List
      </Typography>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}

export default productsList;
