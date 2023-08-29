import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useAppDispatch } from "../Store/Store";
import { AssignFailure, AssignSuccess } from "./AssignTeacherSlice";
import { selectEditData, setEditData } from "./EditTeacherAssignSlice";
import TeacherAssignTable from "./TeacherAssignTable";

const validationSchema = Yup.object().shape({
  className: Yup.string().required("Class Name is required"),
  grade: Yup.string().required("Grade is required"),
  classTeacher: Yup.string().required("Class Teacher is required"),
});

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

interface ClassAssignment {
  className: string;
  grade: string;
  classTeacher: string;
}

interface Teacher {
  id: string | number;
  firstname: string;
}

const AssignTeacher: React.FC<{ teacherList: Array<string> }> = ({
  teacherList,
}) => {
  const dispatch = useAppDispatch();
  const editData = useSelector(selectEditData);

  const [teachersWithRoleTeacher, setTeachersWithRoleTeacher] = useState<
    Teacher[]
  >([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const headers = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    };
    axios
      .get("http://192.168.2.68:3001/user", {
        headers: headers,
      })
      .then((response) => {
        const teacherData: Teacher[] = response.data.data.map(
          (teacher: any) => ({ id: teacher.id, firstname: teacher.firstname })
        );
        console.log("teachernam88888", teacherData);
        setTeachersWithRoleTeacher(teacherData);
      })
      .catch((error) => {
        console.error("Error fetching teachers:", error);
      });
  }, []);

  const handleSubmit = async (
    values: ClassAssignment,
    { resetForm }: FormikHelpers<ClassAssignment>
  ) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };

      if (editData) {
        // Update the edited data in the editData slice of Redux store
        const updatedData = {
          ...editData,
          className: values.className,
          grade: values.grade,
          classTeacher: values.classTeacher,
        };
        dispatch(setEditData(null));
      } else {
        // Perform your normal submission logic for new assignments
        const response = await axios.post(
          "http://192.168.2.68:3001/class",
          {
            className: values.className,
            grade: values.grade,
            classTeacher: values.classTeacher,
          },
          {
            headers: headers,
          }
        );

        dispatch(AssignSuccess(response.data));
        console.log(response.data);
        setSuccess(true);
        window.alert("Data inserted successfully!");
      }

      resetForm();
      dispatch(setEditData(null));
    } catch (error: any) {
      console.error("Error assigning class:", error);
      dispatch(AssignFailure(error.message));
      throw error;
    }
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ paddingTop: "20px" }}>
        <Paper elevation={3} style={{ padding: "25px" }}>
          <Formik
            initialValues={{
              className: editData ? editData.className : "",
              grade: editData ? editData.grade : "",
              classTeacher: editData ? editData.classTeacher : "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, values, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Typography variant="h5" gutterBottom>
                  Assign Class
                </Typography>
                <Box>
                  <Field
                    type="text"
                    label="Class Name"
                    name="className"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    error={touched.className && !!errors.className}
                  />
                  {touched.className && errors.className && (
                    <div>{errors.className}</div>
                  )}

                  <Field
                    type="text"
                    label="Grade"
                    name="grade"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    error={touched.grade && !!errors.grade}
                  />
                  {touched.grade && errors.grade && <div>{errors.grade}</div>}

                  <Field
                    label="Class Teacher"
                    name="classTeacher"
                    as={TextField}
                    fullWidth
                    margin="normal"
                    select
                    error={touched.classTeacher && !!errors.classTeacher}
                  >
                    {teachersWithRoleTeacher?.map((teacher: Teacher) => (
                      <MenuItem key={teacher.id} value={teacher.id}>
                        {teacher.firstname}
                      </MenuItem>
                    ))}
                  </Field>
                  {touched.classTeacher && errors.classTeacher && (
                    <div>{errors.classTeacher}</div>
                  )}
                </Box>
                <SubmitButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Assign
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
      <Container sx={{ paddingTop: "20px" }}>
        <TeacherAssignTable />
      </Container>
    </>
  );
};

export default AssignTeacher;
