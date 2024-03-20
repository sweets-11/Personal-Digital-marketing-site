import React from "react";
import { Box, CardMedia, Typography, Button } from "@mui/material";
const HomePage = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        image="public/images/3.jpg"
        alt="Paella dish"
        sx={{
          height: { xs: "none", lg: "100%" },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: { xs: 60, lg: 230 },
          top: { xs: 55, lg: 250 },
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: 18, md: 500, lg: 60 } }}
        >
          We Connect
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#4a5ca8",
            fontSize: { xs: 15, lg: 50 },
          }}
        >
          Talents
        </Typography>
        <Box
          sx={{
            marginTop: { xs: 1, lg: 5 },
            width: { xs: "50%", lg: "40%" },
            marginBottom: { xs: 1, lg: 4 },
          }}
        >
          <Typography sx={{ color: "#888888", fontSize: { xs: 6, lg: 17 } }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            nostrum ducimus sunt natus exercitationem quasi aut. Voluptatem ipsa
            eligendi molestias consectetur beatae, voluptates saepe repellat non
            quaerat. Necessitatibus.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4a5ca8",
              "&:hover": {
                backgroundColor: "#4a5ca8",
              },
              fontSize: { xs: 6, lg: 17 },
              padding: { xs: 0, lg: 1 },
              minWidth: { xs: 50, lg: 150 },
            }}
          >
            Lear More
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginLeft: { xs: 2, lg: 5 },
              color: "#4a5ca8",
              fontSize: { xs: 5, lg: 17 },
              padding: { xs: 0, lg: 1 },
              minWidth: { xs: 50, lg: 150 },
            }}
          >
            Career
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
