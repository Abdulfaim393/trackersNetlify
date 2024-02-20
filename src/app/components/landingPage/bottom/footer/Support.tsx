"use client";
import React, { FC } from "react";
import { Box, Grid, Theme, Typography } from "@mui/material";
import Link from "next/link";

export interface SupportProps {
  text?: string;
}

const Support: FC<SupportProps> = (props) => {

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
          <Typography variant="h4" color="white" gutterBottom>Support</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/faqs">FAQ's</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/privacyPolicy">Privacy Policy</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/termsandConditions">Terms & Conditions</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/contact">CONTACT US</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Support;
