import React from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  styled,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
} from "@mui/material";
import ConsultingIcon from "@mui/icons-material/EmojiObjects"; // Placeholder icon, replace with your own
import MarketingIcon from "@mui/icons-material/BarChart"; // Placeholder icon, replace with your own
import DesignIcon from "@mui/icons-material/ColorLens"; // Placeholder icon, replace with your own

const ServicePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
  borderRadius: 0,
  borderBottom: `3px solid ${theme.palette.primary.main}`,
}));

const ServicesSection = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box bgcolor="transparent" sx={{ padding: { xs: 5, lg: 10 } }}>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          align="center"
          color="textSecondary"
          mb={1}
        >
          WHAT WE DO
        </Typography>
        <Typography
          gutterBottom
          align="center"
          fontWeight="bold"
          mb={3}
          sx={{ fontSize: { xs: 30, md: 30, lg: 40 } }}
        >
          Full-service Internet Marketing Solutions
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="center"
          color="textSecondary"
          mb={3}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, amet?
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <Grid item xs={12} sm={4}>
            <ServicePaper>
              <ConsultingIcon sx={{ fontSize: 60, mb: 2, color: "#4a5ca8" }} />
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Consulting
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Pretium accumsan in ipsum convallis pellentesque metus
              </Typography>
            </ServicePaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServicePaper>
              <MarketingIcon sx={{ fontSize: 60, mb: 2, color: "#4a5ca8" }} />
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Marketing
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Lobortis integer nec neque facilisis lacus amet neque
              </Typography>
            </ServicePaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServicePaper>
              <DesignIcon sx={{ fontSize: 60, mb: 2, color: "#4a5ca8" }} />
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Design
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Ut ac viverra tortor ut scelerisque tortor senectus senectus
              </Typography>
            </ServicePaper>
          </Grid>
        </Grid>
      </Box>
      <Card
        sx={{
          paddingBottom: 8,
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          image="public/images/image.jpg"
          alt="Descriptive Alt Text"
        />
      </Card>
    </Box>
  );
};

export default ServicesSection;
