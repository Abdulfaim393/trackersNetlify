import React, { FC } from "react";
import {
  Box,
  Grid,
  Typography,
  Theme,
  CSSObject,
  Container,
} from "@mui/material";
import Form from "./Form";
import contactusBackground from "../../../../../public/contactUsbackground.svg";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

export interface ContactFormProps {
  text?: string;
}

const ContactForm: FC<ContactFormProps> = (props) => {

  return (
    <Box className="contactform_root">
      <Typography variant="h2" color="initial" className="contactform_typoh2">
        It's Very Easy To Contact Us
      </Typography>
      <Container maxWidth="lg" className="contactform_form_Add_container">
        <Grid
          container
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="stretch"
          alignContent="stretch"
          wrap="wrap"
          className="contactform_form_address_box"
        >
          <Grid item xs={12} md={6} className="contactform_formContainer">
            <Form />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="contactform_infoContainer">
              <Box className="contactform_add_box">
                <MapIcon className="contactform_map_icon" />
                <Typography
                  variant="h5"
                  className="contactform_infoText"
                  gutterBottom
                >
                  Our Address
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="contactform_add_typo_body1"
                >
                  Tamani Arts offices, 5th floor - office no 554, Business
                  Bay,Dubai 
                </Typography>
              </Box>
              <Box className="contactform_add_box">
                <PhoneIcon className="contactform_map_icon" />
                <Typography
                  variant="h5"
                  className="contactform_infoText"
                  gutterBottom
                >
                  OUR PHONE
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="contactform_add_typo_body1"
                >
                  (04) 834 3814, +971 52 214 2913
                </Typography>
              </Box>
              <Box className="contactform_add_box">
                <MailIcon className="contactform_map_icon" />
                <Typography
                  variant="h5"
                  className="contactform_infoText"
                  gutterBottom
                >
                  OUR MAILBOX
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="contactform_add_typo_body1"
                >
                  info@trackers.ae
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
