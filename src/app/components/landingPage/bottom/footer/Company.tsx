"use client";
import React, { FC } from "react";
import { Theme, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

export interface CompanyProps {
  text?: string;
}

const Company: FC<CompanyProps> = (props) => {
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
            Company
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/">HOME</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/services">SERVICES</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/industry">INDUSTRY</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/blog">BLOG</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/about">ABOUT US</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link href="/contact">CONTACT US</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Company;
