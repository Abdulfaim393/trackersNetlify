import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import Image from "next/image";

export interface OfferedserviceProps {
  main?: string;
  img?: string;
  body?: string;
}

const Offeredservice: FC<OfferedserviceProps> = ({ main, img, body }) => {

  return (
    <Box className="Offeredservice_box">
      <Image
        src={img!}
        height={50}
        width={50}
        alt="webdev"
        className="Offeredservice_image"
      />
      <Typography variant="h3" color="initial" align="center" gutterBottom className="Offeredservice_typography_h3"> 
        {main}
      </Typography>
      <Typography variant="body1" color="initial" align="center" className="Offeredservice_typography_body1">
        {body}
      </Typography>
    </Box>
  );
};

export default Offeredservice;
