import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik"; // Import Formik components
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup"; // Import Yup for validation
import { RootState } from "../Store/Store";
import { login } from "./AuthActions";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const ErrorText = styled(Box)(({ theme }) => ({
  color: "red",
  marginTop: theme.spacing(1),
}));

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    // .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<any>();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (values: any) => {
    try {
      const response = await dispatch(login(values.email, values.password));
      if (response.success) {
        setLoginSuccess(true);
      } else {
        setLoginError(response.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <StyledPaper elevation={3}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        {/* Formik wraps your form */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Form fields */}
              <Field
                type="email"
                name="email"
                label="Email Address"
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                as={TextField} // Use TextField as the input component
              />
              <ErrorMessage name="email">
                {(msg) => <ErrorText>{msg}</ErrorText>}
              </ErrorMessage>

              <Field
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                as={TextField}
              />
              <ErrorMessage name="password">
                {(msg) => <ErrorText>{msg}</ErrorText>}
              </ErrorMessage>

              {/* Forgot password and Sign Up links */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component={NavLink}
                    to="/registrationpage"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              {/* Submit button */}
              <StyledSubmitButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                // disabled={isSubmitting}
              >
                Log In
              </StyledSubmitButton>
            </Form>
          )}
        </Formik>
        {loginError && <ErrorText>{loginError}</ErrorText>}
      </StyledPaper>
    </Container>
  );
};

export default LoginPage;
