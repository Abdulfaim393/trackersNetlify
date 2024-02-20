import React, { FC } from "react";
import { Box, Theme } from "@mui/material";
import Image from "next/image";

export interface PartnerProps {
  name?: string;
  logo?: string;
}

const Partner: FC<PartnerProps> = ({ name, logo }) => {
  return (
    <Box className="partner_root">
      <Image src={logo!} alt={name!} height={150} width={180} />
    </Box>
  );
};

export default Partner;
