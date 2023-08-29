import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../Store/Store";
import {
  registrationFailure,
  registrationStart,
  registrationSuccess,
} from "./RegisterSlice";

const RegistrationForm = ({ initialValues, isEditing }: any) => {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    userName: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    role: Yup.string().required("Role is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      dispatch(registrationStart());

      try {
        const authToken = localStorage.getItem("authToken");
        const headers = {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        };

        let response;

        if (isEditing) {
          // Edit mode: Make a PUT request to update user's data
          response = await axios.put(
            `http://192.168.2.68:3001/user/${initialValues.id}`,
            {
              username: values.userName,
              firstname: values.firstName,
              lastname: values.lastName,
              email: values.email,
              password: values.password,
              phone: values.mobile,
              role: values.role,
            },
            {
              headers: headers,
            }
          );
        } else {
          // Registration mode: Make a POST request to create a new user
          response = await axios.post(
            "http://192.168.2.68:3001/auth/signup",
            {
              username: values.userName,
              firstname: values.firstName,
              lastname: values.lastName,
              email: values.email,
              password: values.password,
              phone: values.mobile,
              role: values.role,
            },
            {
              headers: headers,
            }
          );
        }

        if (response.status === 200) {
          dispatch(registrationSuccess());
          console.log(
            isEditing ? "Edit successful" : "Registration successful",
            response.data
          );
        }
      } catch (error: any) {
        dispatch(registrationFailure(error.message));
        console.error(isEditing ? "Edit error" : "Registration error", error);
      }
    },
  });

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "center", marginBottom: "10px" }}
        >
          Add Teacher
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={
                  formik.touched.firstName &&
                  (formik.errors.firstName as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={
                  formik.touched.lastName &&
                  (formik.errors.lastName as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="userName"
                fullWidth
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={
                  formik.touched.userName &&
                  (formik.errors.userName as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email &&
                  (formik.errors.email as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password &&
                  (formik.errors.password as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mobile"
                name="mobile"
                fullWidth
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={
                  formik.touched.mobile &&
                  (formik.errors.mobile as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <Select
                  label="Role"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                >
                  <MenuItem value="Principal">Principal</MenuItem>
                  <MenuItem value="Teacher">Teacher</MenuItem>
                  <MenuItem value="Student">Student</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            {isEditing ? "Save Changes" : "Register"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
