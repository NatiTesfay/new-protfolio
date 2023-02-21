import { MDBContainer, MDBRow, MDBCol , MDBCardImage } from "mdb-react-ui-kit";
import React from "react";

function MyProjects() {
  return (
    <>
      <MDBContainer className="d-flex justify-content-between p-4 mt-5 ">
        <MDBRow>
          <MDBCol>
            <h1>Games</h1>
            <p>Tic Tac Toe</p>
            <div className="avatar mx-auto bg-white bg-image hover-zoom">
              <MDBCardImage
                src="https://media.istockphoto.com/id/946399874/photo/chalkboard-ticktacktoe-background.jpg?s=2048x2048&w=is&k=20&c=1HYoMWC2B4WUPaojO-YZQCtOwqzepGm8KsrdEEBMIMQ="
                className=" img-fluid absolute-center"
                width={"250"}
              />
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1>Frontend</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1>Full Stack</h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default MyProjects;
