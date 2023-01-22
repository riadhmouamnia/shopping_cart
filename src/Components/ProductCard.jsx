import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ReactStars from "react-rating-stars-component";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({
  product: { name, photoUrl, description, rating, price, id, discount },
}) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ display: "flex", margin: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit: "cover" }}
        image={photoUrl}
        alt={name}
      />
      <CardContent
        sx={{
          flex: "1",
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: 200 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1" color="text.secondary" component="h6">
            {description}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "end" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={rating}
              activeColor="#ffd700"
              styes
            />
          </Box>
          <Typography variant="h5" color="text.secondary">
            £{price.toFixed(2)}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                dispatch(addToCart({ name, photoUrl, price, id, discount }))
              }
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
