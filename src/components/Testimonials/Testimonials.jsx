import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
  Container,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const reviews = [
  {
    name: "Matthew Johnson",
    rating: 4.8,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quam dolores, expedita iste praesentium accusantium?",
    profilePic: "public/static/images/testimonial3.jpg",
    reviewsCount: "200+",
  },
  {
    name: "Luis Carloz",
    rating: 4.6,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quam dolores, expedita iste praesentium accusantium?",
    profilePic: "public/static/images/testimonial2.jpg",
    reviewsCount: "400+",
  },
  {
    name: "Alice Miles",
    rating: 4.8,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quam dolores, expedita iste praesentium accusantium?",
    profilePic: "public/static/images/testimonial1.jpg",
    reviewsCount: "100+",
  },
  // ... add more reviews as needed
];

const ReviewCard = ({ name, rating, text, profilePic, reviewsCount }) => (
  <Card raised sx={{ maxWidth: 345, mx: "auto", boxShadow: 3 }}>
    <CardContent>
      <Typography
        gutterBottom
        variant="h6"
        component="h2"
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" } }}
      >
        {name}
      </Typography>
      <Rating value={rating} readOnly />
      <Typography
        color="textSecondary"
        sx={{ mb: 2, fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}
      >
        {reviewsCount} Reviews
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ mb: 2, fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
      >
        {text}
      </Typography>
      <Box display="flex" alignItems="center">
        <Avatar src={profilePic} imgProps={{ loading: "lazy" }} />
        <Typography
          variant="subtitle1"
          component="span"
          sx={{ ml: 1, fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" } }}
        >
          {name}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      bgcolor="#4a5ca8"
      color="primary.contrastText"
      sx={{ marginTop: 20, paddingBottom: 10 }}
    >
      <Box
        sx={{
          borderRadius: 50,
          display: "flex",
          backgroundColor: "#fff",
          padding: { xs: 2, lg: 5 },
          maxWidth: { xs: 300, lg: 1000 },
          color: "#000",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          bottom: { xs: 60, lg: 90 },
          "&:hover": {
            padding: 6,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" mb={1}>
            <FacebookIcon
              sx={{ fontSize: { xs: 30, lg: 50 }, color: "#4a5ca8" }}
            />
            <Typography sx={{ marginLeft: 1, fontSize: { xs: 20, lg: 50 } }}>
              4.5
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { xs: 7, lg: 18 } }}>
            200+ Reviews
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" mb={1}>
            <InstagramIcon
              sx={{ fontSize: { xs: 30, lg: 50 }, color: "#4a5ca8" }}
            />
            <Typography sx={{ marginLeft: 1, fontSize: { xs: 20, lg: 50 } }}>
              4.6
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { xs: 7, lg: 18 } }}>
            550+ Reviews
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" mb={1}>
            <GoogleIcon
              sx={{ fontSize: { xs: 30, lg: 50 }, color: "#4a5ca8" }}
            />

            <Typography
              variant="h3"
              sx={{ marginLeft: 1, fontSize: { xs: 20, lg: 50 } }}
            >
              4.8
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { xs: 7, lg: 18 } }}>
            300+ Reviews
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOnIcon
              sx={{ fontSize: { xs: 30, lg: 50 }, color: "#4a5ca8" }}
            />
            <Typography
              variant="h3"
              sx={{ marginLeft: 1, fontSize: { xs: 20, lg: 50 } }}
            >
              4.1
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { xs: 7, lg: 18 } }}>
            500+ Reviews
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ paddingTop: 2 }}
      >
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: isSmallScreen ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
