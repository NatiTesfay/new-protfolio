import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import AllSkills from "../../../data/programsSkills";

function CardSkills() {
  return (
    <MDBContainer>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4 mt-4 p-3 m-3">
        {AllSkills.map((skill, index) => {
          return (
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardBody>
                  <MDBCardTitle>{skill.language}</MDBCardTitle>
                  <MDBCardText>
                   {skill.about}
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                  <MDBBtn href="/home" >
                    Back To Home Page
                  </MDBBtn>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
export default CardSkills;

// {AllSkills.map((skill, i) => {
//   return (
//     <MDBRow className='d-flex justify-content-center mt-4'>
//     <MDBCol>
//       <MDBCard size={3}>
//         <MDBCardBody>
//           <MDBCardTitle>{skill.language}</MDBCardTitle>
//           <MDBCardText>
//             {skill.about}
//           </MDBCardText>
//           <MDBBtn href='/home'>Back to homePage</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//       </MDBCol>
//   </MDBRow>
//   );
// })}
