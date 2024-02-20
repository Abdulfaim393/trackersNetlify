import React, { FC } from "react";
import { Box, Grid, Typography, Theme, Container } from "@mui/material";
import Industry from "./Industry";
import industriesBackground from "../../../../../public/inductries background.jpeg";

export interface IndustriesProps {
  text?: string;
}

const services = [
  {
    number: "01",
    service: "Frigerated Cargo Industries",
    logo: "/industry1.png",
  },
  { number: "02", service: "Ready Mix Industry", logo: "/log2.png" },
  { number: "03", service: "Waste Management", logo: "/logo3.png" },
  { number: "04", service: "School Transport Solutions", logo: "/logo4.png" },
  {
    number: "05",
    service: "AI Driver Evaluation Simulator",
    logo: "/industry1.png",
  },
  { number: "06", service: "FUEL MONITORING", logo: "/log2.png" },
];

const Industries: FC<IndustriesProps> = (props) => {

  return (
    <Box className="industries_main">
      <Typography variant="h2" color="initial" className="industries_title">
        Industries We Serve
      </Typography>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2} // Adjusted spacing between items
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map(({ number, service, logo }) => (
            <Grid key={number} item xs={12} sm={6} md={4} lg={3}>
              <Industry count={number} item={service} image={logo} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Industries;
