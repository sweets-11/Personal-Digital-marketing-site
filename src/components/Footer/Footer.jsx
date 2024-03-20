import { Box, Grid, Typography, Link } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const Footer = () => {
  return (
    <Grid
      spcing={3}
      marginTop="70px"
      padding="35px 0"
      backgroundColor="transparent"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        sx={{ flexFlow: { xs: "column", sm: "column", lg: "row" } }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "none", sm: "none", lg: "clamp(20%, 30%, 40%)" } }}
        >
          <Typography variant="h4" fontWeight="bold" mb="30px" display="flex">
            <AdbIcon
              sx={{
                display: { xs: "flex", md: "flex", color: "#000" },
                mr: 1,
                fontSize: 35,
              }}
            />
            <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
              D-Markiting
            </Link>
          </Typography>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            adipisci dolores mollitia quo! Tempore adipisci perspiciatis
            voluptatum commodi voluptatem ullam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Debitis adipisci dolores mollitia quo!
            Tempore adipisci perspiciatis voluptatum commodi voluptatem ullam.
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" fontWeight="bold" mb="25px">
            Services
          </Typography>
          <Typography mb="18px">SEO</Typography>
          <Typography mb="18px">Digital Markiting</Typography>
          <Typography mb="18px">Digital Strategy</Typography>
          <Typography mb="18px">CRO</Typography>
          <Typography>Analytics</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h4" fontWeight="bold" mb="25px">
            Agency
          </Typography>
          <Typography mb="18px">About Us</Typography>
          <Typography mb="18px">Our Team</Typography>
          <Typography mb="18px">Careers</Typography>
          <Typography mb="18px">News & Blogs</Typography>
          <Typography>Contact Us</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ width: { xs: "none", sm: "none", lg: "clamp(20%, 25%, 30%)" } }}
        >
          <Typography variant="h4" fontWeight="bold" mb="25px">
            Contact Info
          </Typography>
          <Typography mb="18px">123 Elm Street Anytown, USA 12345</Typography>
          <Typography mb="18px" sx={{ wordWrap: "break-word" }}>
            Email: marketing258@gmail.com
          </Typography>
          <Typography>(7032)333-4444-552</Typography>
        </Grid>
      </Box>
      <Box display="flex">
        <Typography margin={"40px auto 0"} color="#B4B4B8" variant="subtitle1">
          ©2023 The Creative Corner
        </Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
