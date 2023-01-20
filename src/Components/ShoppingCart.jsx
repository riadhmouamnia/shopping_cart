import { Box, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function ShoppingCart({ product }) {
  const { cart } = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const getDiscount = () => {
    let discount = 0;
    let twoButters = false;
    let isBread = false;
    cart.forEach((item) => {
      //Chek if there is 2 Butter availble
      if (item.name === "Butter" && item.quantity >= 2) {
        twoButters = true;
        // discount += -0.5;
      }
      //Chek if there is 4 Milk availble
      else if (item.name === "Milk" && item.quantity >= 4) {
        discount += -1.15;
        //Check if Bread is availbe
      } else if (item.name === "Bread" && item.quantity >= 1) {
        isBread = true;
      }
      if (twoButters && isBread) {
        discount += -0.5;
      }
    });
    return discount;
  };

  return (
    <Box>
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
          <Typography variant="subtitle2">
            {getTotalPrice().toFixed(2)}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Discount
          </Typography>
          <Typography variant="subtitle2">{getDiscount()}</Typography>
          <Typography variant="h6" color="text.secondary">
            Total
          </Typography>
          <Typography variant="subtitle2">
            {(getTotalPrice() + getDiscount()).toFixed(2)}
          </Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default ShoppingCart;
