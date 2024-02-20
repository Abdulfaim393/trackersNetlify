import React, { FC } from "react";
import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import About from "./About";
import Company from "./Company";
import Support from "./Support";
import Address from "./Address";
import CopyRights from "../bottombar/CopyRights";

export interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = (props) => {

  return (
    <Box className="footer_root">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3} // Increase spacing between sections
          direction="row"
          justifyContent="center"
        >
          <Grid item xs={12} md={3} sm={3} lg={3} xl={3}>
            <Box className="footer_section">
              <About />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sm={9}
            lg={9}
            xl={9}
            className="footer_background"
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Box className="footer_section">
                  <Company />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className="footer_section">
                  <Support />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box className="footer_section">
                  <Address />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CopyRights />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
