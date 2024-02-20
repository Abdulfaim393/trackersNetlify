import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Theme,
} from "@mui/material";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log("clicked");
    console.log(data);
    // Add your logic to handle form submission
  };

  return (
    <Container maxWidth="md">
      <Box className="formContact_root">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            aria-invalid={errors.name ? "true" : "false"}
            required
            className="formContact_textfield"
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            aria-invalid={errors.email ? "true" : "false"}
            required
            className="formContact_textfield"
          />

          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            aria-invalid={errors.message ? "true" : "false"}
            required
            className="formContact_textfield"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="formContact_text_button"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
