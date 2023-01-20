import { Box, Typography } from "@mui/material";
import ProductCard from "./Components/ProductCard";
import ShoppingCart from "./Components/ShoppingCart";
import products from "./db/db";
import { useSelector } from "react-redux";

function App() {
  // const products = useSelector((state) => state.products);
  // console.log(items);
  const { cart } = useSelector((state) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 4,
        justifyContent: "center",
        padding: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "pink",
          borderRadius: 1,
          p: 2,
          m: 1,
        }}
      >
        <Typography variant="h4" component="h2">
          Products
        </Typography>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: "#eee",
          borderRadius: 1,
          p: 2,
          m: 1,
        }}
      >
        {getTotalQuantity() === 1 ? (
          <Typography>{getTotalQuantity()} Item in cart</Typography>
        ) : (
          <Typography>{getTotalQuantity()} Items in cart</Typography>
        )}
        <ShoppingCart />
      </Box>
    </Box>
  );
}

export default App;
