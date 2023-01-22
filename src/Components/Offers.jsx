import { Box, Typography } from "@mui/material";

function Offers() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        mt: 4,
        bgcolor: "#eee",
        py: 1,
        px: 2,
        width: 300,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
      }}
    >
      <Typography variant="h6" sx={{ color: "crimson" }}>
        Offers
      </Typography>
      <Typography variant="subtitle2">
        Buy 2 Butter and get a Bread at 50% off
      </Typography>
      <Typography variant="subtitle2">
        Buy 3 Milk and get the 4th milk for free
      </Typography>
    </Box>
  );
}

export default Offers;
