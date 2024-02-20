"use client";
import React, { FC, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../../../../../public/logo.svg";
import Link from "next/link";

export interface HeaderProps {
  text?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar className="header_navbar">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <Menu />
            </IconButton>
          )}

          <Image
            src={logo}
            height={100}
            width={100}
            alt="logo"
            className="logo_image"
          />

          {!isMobile && (
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              direction={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              alignContent="stretch"
              wrap="wrap"
              paddingLeft={20}
            >
              <Grid item xs={12} md={2}>
                <Link href="/" className="header_navlinks">
                  HOME
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/services" className="header_navlinks">
                  SERVICES
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/industry" className="header_navlinks">
                  INDUSTRY
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/blog" className="header_navlinks">
                  BLOG
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/about" className="header_navlinks">
                  ABOUT US
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="/contact" className="header_navlinks">
                  CONTACT US
                </Link>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className="header_drawerPaper"
      >
        <List>
          {[
            "HOME",
            "SERVICES",
            "INDUSTRY",
            "BLOG",
            "ABOUT US",
            "CONTACT US",
          ].map((text, index) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
