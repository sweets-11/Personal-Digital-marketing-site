import React from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Container,
  useTheme,
  useMediaQuery,
  CardActionArea,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LanguageIcon from "@mui/icons-material/Language";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { styled } from "@mui/material/styles";

const services = [
  {
    Icon: LeaderboardIcon,
    title: "Digital Strategy",
    description:
      "Ultrices dictum integer quam morbi adipiscing suspendisse neque vel egestas commodo sit felis consectetur integer vitae, at mattis turpis id",
  },
  {
    Icon: DeviceHubIcon,
    title: "Advertising",
    description:
      "Quis purus enim et quam eget sed tellus ut tellus sit lectus mauris suscipit lobortis lectus netus eros, habitasse maecenas diam pellentesque integer non",
  },
  {
    Icon: LanguageIcon,
    title: "Online Marketing",
    description:
      "Tellus, tristique euismod at fames lorem ut adipiscing amet gravida fermentum tellus ornare eget sed sit bibendum tincidunt diam, dignissim purus aenean",
  },
  {
    Icon: WebAssetIcon,
    title: "Search Engine Optimization",
    description:
      "Id vel lectus amet id amet blandit diam arcu senectus ac commodo, sed est sagittis sed aliquam volutpat blandit quam vitae, rutrum euismod sit",
  },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  transition: "transform 0.15s ease-in-out",
  "&:hover": {
    transform: "scale3d(1.05, 1.05, 1)",
    boxShadow: theme.shadows[20],
  },
}));

const ServiceCard = ({ Icon, title, description }) => (
  <StyledPaper elevation={3}>
    <CardActionArea>
      <Box sx={{ marginBottom: 2 }}>
        <Icon style={{ fontSize: 40, color: "#4a5ca8" }} />
        <Typography
          variant="h6"
          component="h3"
          sx={{ mt: 2, fontWeight: "medium" }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        color="text
Secondary"
      >
        {description}
      </Typography>
    </CardActionArea>
  </StyledPaper>
);

const useStyles = (theme) => ({
  responsiveGrid: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "25%",
      flexBasis: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
      flexBasis: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
});

const ServicesSection = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isXSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <Container sx={{}}>
      <Box sx={{ flexGrow: 1, backgroundColor: "transparent" }}>
        <Typography
          gutterBottom
          align="center"
          fontWeight="bold"
          mb={3}
          sx={{ fontSize: { xs: 30, md: 30, lg: 40 } }}
        >
          Take Your Business to the next Level
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="center"
          sx={{ color: blue[700], mb: 4 }}
        >
          Id senectus facilisi enim accumsan ac aliquam suspendisse dapibus
          morbi ut sed pellentesque elementum velit dictum
        </Typography>
        <Grid container spacing={8} sx={{ padding: 4 }}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={index}
              className={classes.responsiveGrid}
            >
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServicesSection;
