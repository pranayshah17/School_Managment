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
import { useFormik } from "formik";
import * as Yup from "yup";
import { editTeacher } from "../Slices/PrincipalDashboard/TeacherListSlice";
import { useAppDispatch } from "../Store/Store";
import { registerUser } from "./RegisterSlice";

const RegistrationForm = ({
  initialValues,
  isEditing,
  setEditeData,
  editeData,
}: any) => {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    username: Yup.string().required("username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("phone number is required"),
    role: Yup.string().required("Role is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      try {
        if (isEditing && editeData.id) {
          const updatedData = {
            id: editeData.id,
            firstname: values.firstname,
            lastname: values.lastname,
            username: values.username,
            email: values.email,
            password: values.password,
            phone: values.phone,
            role: values.role,
          };

          // Dispatch the editTeacher action
          const resultAction = await dispatch(
            editTeacher({
              teacherId: editeData.id,
              updatedData: updatedData,
            })
          );

          if (editTeacher.fulfilled.match(resultAction)) {
            // Editing is done, reset editData
            setEditeData({ isEditing: false, initialValues: {} });
          } else if (editTeacher.rejected.match(resultAction)) {
            // Handle rejection
            console.error("Edit rejected:", resultAction.error);
          }
        } else {
          console.log(values, "hello values my friend ");
          await dispatch(registerUser(values));
        }
      } catch (error: any) {
        console.error("Error:", error.message);
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
                name="firstname"
                fullWidth
                // value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={
                  formik.touched.firstname &&
                  (formik.errors.firstname as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastname"
                fullWidth
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={
                  formik.touched.lastname &&
                  (formik.errors.lastname as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="username"
                name="username"
                fullWidth
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={
                  formik.touched.username &&
                  (formik.errors.username as React.ReactNode)
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
                label="phone"
                name="phone"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={
                  formik.touched.phone &&
                  (formik.errors.phone as React.ReactNode)
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
