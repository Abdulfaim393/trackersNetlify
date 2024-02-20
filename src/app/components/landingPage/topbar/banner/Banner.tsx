import React, { FC } from "react";
import { Theme, Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import banner from "../../../../../../public/banner1.svg";

export interface BannerProps {
  text?: string;
}

const Banner: FC<BannerProps> = (props) => {

  return (
    <Box className="banner_box">
      <Image src={banner} alt="banner1" className="banner_image" />
    </Box>
  );
};

export default Banner;
