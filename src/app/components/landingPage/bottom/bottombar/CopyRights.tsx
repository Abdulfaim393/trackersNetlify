import React, { FC } from "react";
import { Theme, Typography, Box, Container, Grid } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

export interface CopyRightsProps {
  text?: string;
}

const CopyRights: FC<CopyRightsProps> = (props) => {
  return (
    <Box className="copyright_root">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="left">
              © {new Date().getFullYear()} CopyRights: trackers.ae reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="flex-end">
            <Grid item className="copyright_icon_padding">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon fontSize="large" />
              </Link>
            </Grid>
            <Grid item className="copyright_icon_padding">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="large" />
              </Link>
            </Grid>
            <Grid item className="copyright_icon_padding">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </Link>
            </Grid>
            <Grid item className="copyright_icon_padding">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="large" />
              </Link>
            </Grid>
            <Grid item className="copyright_icon_padding">
              <Link
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon fontSize="large" />
              </Link>
            </Grid>
            <Grid item className="copyright_icon_padding">
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon fontSize="large" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CopyRights;
