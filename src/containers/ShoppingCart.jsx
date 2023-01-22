import { Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { useMemo } from "react";

const getTotalPrice = (cart) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

const getDiscount = (cart) => {
  let discount = [];
  let totalDiscount = 0;
  let acc = 0;
  let isBread = false;
  let isTwoButters = false;
  let isThreeMilk = false;
  const initialValue = 0;
  cart.forEach((item) => {
    if (item.id === 3 && item.quantity >= 2) {
      isTwoButters = true;
      if (item.quantity % 2 === 0) acc = item.quantity / 2;
      else acc = (item.quantity - 1) / 2;
    }
    if (item.id === 2 && item.quantity >= 3) {
      isThreeMilk = true;
      if (item.quantity % 3 === 0) acc = item.quantity / 3;
      else acc = (item.quantity - 1) / 3;
    }
    if (item.id === 1 && item.quantity >= 1) isBread = true;
    if (isBread && isTwoButters) discount.push(-(acc * 0.5));
    if (isThreeMilk) discount.push(-(acc * 1.15));
  });
  totalDiscount = discount.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return totalDiscount;
};

function ShoppingCart() {
  const { cart } = useSelector((state) => state.cart);
  const totalPrice = useMemo(() => getTotalPrice(cart), [cart]);
  const totalDiscount = useMemo(() => getDiscount(cart), [cart]);
  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        borderRadius: 1,
        p: 2,
        m: 1,
      }}
    >
      <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
        Cart <ShoppingCartOutlinedIcon sx={{ pl: 1 }} />
      </Typography>
      {cart?.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.photoUrl}
          title={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      {cart.length ? (
        <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Subtotal
          </Typography>
          <Typography variant="subtitle2">{totalPrice.toFixed(2)}</Typography>
          <Typography variant="h6" color="text.secondary">
            Discount
          </Typography>
          <Typography variant="subtitle2">{totalDiscount}</Typography>
          <Typography variant="h6" color="text.secondary">
            Total
          </Typography>
          <Typography variant="subtitle2">
            {(totalPrice - totalDiscount).toFixed(2)}
          </Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default ShoppingCart;
