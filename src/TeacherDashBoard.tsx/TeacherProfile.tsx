import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  borderRadius: theme.spacing(2),
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.background.paper,
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

const TeacherProfile: React.FC = () => {
  const teacherName = "John Doe";
  const subject = "Mathematics";
  const teacherPhotoUrl = "https://via.placeholder.com/150"; // Placeholder image URL

  return (
    <StyledCard>
      <StyledAvatar alt={teacherName} src={teacherPhotoUrl} />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {teacherName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {subject}
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          justo vel neque cursus sodales. Vestibulum vestibulum tortor
          hendrerit, condimentum metus non, tincidunt odio.
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TeacherProfile;
