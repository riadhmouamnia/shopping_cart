import { Box } from "@mui/material";
import Offers from "../Components/Offers";
import ProductsList from "./ProductsList";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <>
      <Offers />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 4,
          justifyContent: "center",
          padding: 4,
          flexDirection: { xs: "column", xl: "row" },
        }}
      >
        <ProductsList />
        <ShoppingCart />
      </Box>
    </>
  );
}

export default App;
