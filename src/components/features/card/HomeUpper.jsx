import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function HomeUpper() {
  return (
    <MDBContainer className="my-5">
      <MDBRow>
        <MDBCol md="8" offsetMd="4">
          <h4>Motivation:</h4>
          <p>
            A highly motivated full-stack developer with a solid work ethic,
            works well independently as well as part of a team. Fast and
            independent learning Committed for professionalism & ability to
            adapt quickly to changing work environments.
          </p>
        </MDBCol>
        <MDBCol md="8" offsetMd="4">
          <h4>future plans:</h4>
          <p>
            After graduating from the software development course, I would like
            to continue to develop my abilities and pursue a degree in computer
            science
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default HomeUpper;
