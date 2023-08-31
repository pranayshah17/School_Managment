// import { Grid } from "@mui/material";
// import React, { useState } from "react";
// import { TeacherList } from "../Slices/PrincipalDashboard/TeacherLIst";
// import RegistrationForm from "../login_signup/RegistrationForm";

// interface Teacher {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
//   mobile: string;
//   role: string;
// }

// const AddTeacherPage: React.FC = () => {
//   const [editeData, setEditeData] = useState<any>(null);
//   console.log(editeData);


  
//   const initialValues = {
//     firstname: editeData ? editeData.firstname : "",
//     lastname: editeData ? editeData.lastname : "",
//     username: editeData ? editeData.username : "",
//     email: editeData ? editeData.email : "",
//     password: editeData ? editeData.password : "",
//     phone: editeData ? editeData.phone : "",
//     role: editeData ? editeData.role : "",
//   };
//   console.log(editeData);

//   return (
//     <div>
//       <Grid container spacing={1}>
//         <RegistrationForm
//           initialValues={initialValues}
//           isEditing={Boolean(editeData)}
//           setEditeData={setEditeData}
//           editeData={editeData}
//         />

//         <TeacherList setEditeData={setEditeData} editeData={editeData} />
//       </Grid>
//     </div>
//   );
// };

// export default AddTeacherPage;

import React from 'react'

const AddTeacherPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default AddTeacherPage

