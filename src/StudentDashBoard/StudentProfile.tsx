import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  // maxWidth: 400,
  // margin: "auto",
  // maxHeight: 500,
  // marginLeft: "50px",
  borderRadius: theme.spacing(2),
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "boxShadow 0.3s",
  "&:hover": {
    boxShadow: "0 0px 25px rgba(0, 0, 0, 0.2)",
  },
  backgroundColor: "#f4f4f4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(14),
  height: theme.spacing(14),
  marginTop: theme.spacing(3),
  border: `4px solid ${theme.palette.primary.main}`,
}));

const StudentProfile: React.FC = () => {
  const studentName = "Jane Smith";
  const grade = "Grade 10";
  const studentPhotoUrl = "https://via.placeholder.com/150"; // Placeholder image URL

  return (
    <Container>
      <StyledCard>
        <StyledAvatar alt={studentName} src={studentPhotoUrl} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {studentName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {grade}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            justo vel neque cursus sodales. Vestibulum vestibulum tortor
            hendrerit, condimentum metus non, tincidunt odio.
          </Typography>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default StudentProfile;
