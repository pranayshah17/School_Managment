import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TeacherFormProps {
  onSubmit: (data: TeacherFormData) => void;
}

interface TeacherFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  mobileNumber: string;
}

const TeacherForm: React.FC<TeacherFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TeacherFormData>();

  const handleFormSubmit = (data: TeacherFormData) => {
    onSubmit(data);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ paddingTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" align="center" sx={{ paddingBottom: "20px" }}>
          Add Teacher
        </Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "First Name is required" }}
                render={({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: "Last Name is required" }}
                render={({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{ required: "Username is required" }}
                render={({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    label="Username"
                    fullWidth
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="mobileNumber"
                control={control}
                defaultValue=""
                rules={{
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid mobile number",
                  },
                }}
                render={({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    label="Mobile Number"
                    fullWidth
                    error={!!errors.mobileNumber}
                    helperText={errors.mobileNumber?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "18px" }}
          >
            Add Teacher
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TeacherForm;
