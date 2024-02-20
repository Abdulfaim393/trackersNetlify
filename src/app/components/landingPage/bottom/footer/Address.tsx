"use client";
import React, { FC } from "react";
import { Box, Grid, Theme, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import HomeIcon from "@mui/icons-material/Home";

export interface AddressProps {
  text?: string;
}

const Address: FC<AddressProps> = (props) => {
  return (
    <Box className="company_root">
      <Grid
        container
        spacing={1}
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        color="white"
      >
        <Grid item xs={12} md={2}>
          <Typography variant="h4" color="white" gutterBottom>
            Address
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="body1" color="white" gutterBottom>
            United Arab Emirates Termani Arts offices, 5th floor- office no. 554
            Business Bay, Dubai, UAE
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className="footer_address_icons">
          <PhoneIcon />
          <Typography
            variant="body1"
            color="white"
            gutterBottom
            className="footer_address_typo"
          >
            +971 522142913
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className="footer_address_icons">
          <PhoneForwardedIcon />
          <Typography
            variant="body1"
            color="white"
            gutterBottom
            className="footer_address_typo"
          >
            (04)8343814
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} className="footer_address_icons">
          <HomeIcon />
          <Typography
            variant="body1"
            color="white"
            gutterBottom
            className="footer_address_typo"
          >
            info@trackers.ae
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Address;
