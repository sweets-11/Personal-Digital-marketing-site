import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";

const NewsLetter = () => {
  return (
    <Box
      bgcolor="#26262c"
      color="#fff"
      sx={{ paddingTop: 10, paddingBottom: 10 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1.5rem", // for small screens
                  sm: "2rem", // for medium screens
                  md: "2.5rem", // for large screens
                },
              }}
            >
              Ready to Take Your Internet Marketing to the Next Level?
            </Typography>
            <Typography
              paragraph
              sx={{
                fontSize: {
                  xs: "0.875rem", // for small screens
                  sm: "1rem", // for medium screens
                  md: "1.125rem", // for large screens
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos magnam nemo eius, ea vero, non accusamus commodi
              corrupti iusto labore veniam ab nesciunt.
            </Typography>
            <Typography
              paragraph
              sx={{
                fontSize: {
                  xs: "0.875rem", // for small screens
                  sm: "1rem", // for medium screens
                  md: "1.125rem", // for large screens
                },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea odio
              rerum quibusdam enim illum autem voluptas voluptatem, cum et eum.
              Quas exercitationem nam aut eaque saepe corrupti fugit architecto
              perferendis?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1.25rem", // for small screens
                  sm: "1.5rem", // for medium screens
                  md: "2rem", // for large screens
                },
              }}
            >
              Let's Talk
            </Typography>
            <form noValidate autoComplete="off">
              <Box bgcolor="#fff" mb={2}>
                <TextField fullWidth label="Full name" variant="outlined" />
              </Box>
              <Box bgcolor="#fff" mb={2}>
                <TextField fullWidth label="Email address" variant="outlined" />
              </Box>
              <Box bgcolor="#fff" mb={2}>
                <TextField
                  fullWidth
                  label="Your message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Box>
              <Button variant="contained" color="primary">
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsLetter;
