import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import Image from "next/image";

export interface IndustryProps {
  item?: string | number;
  count?: string;
  image?: string;
}

const Industry: FC<IndustryProps> = ({ item, count, image }) => {

  return (
      <Box className="industry_root">
        <Box>
          <Typography
            variant="h4"
            color="initial"
            className="industry_count_typo"
          >
            {count}
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            className="industry_typography"
          >
            {item}
          </Typography>
        </Box>
        <Box
          flex="1"
          display="flex"
          justifyContent="right"
          alignItems="center"
          className="industry_image_main_box"
        >
          <Image
            src={image!}
            alt="image"
            height={60}
            width={60}
            className="industry_image_box"
          />
        </Box>
      </Box>
  );
};

export default Industry;
