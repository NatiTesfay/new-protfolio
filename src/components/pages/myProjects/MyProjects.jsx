import { MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdb-react-ui-kit";
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
              <a href="https://voluble-longma-82a461.netlify.app/">
                <MDBCardImage
                  src="https://media.istockphoto.com/id/946399874/photo/chalkboard-ticktacktoe-background.jpg?s=2048x2048&w=is&k=20&c=1HYoMWC2B4WUPaojO-YZQCtOwqzepGm8KsrdEEBMIMQ="
                  className=" img-fluid absolute-center"
                  width={"200"}
                />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1>Frontend</h1>
            <p>Cost management App</p>
            <div className="avatar mx-auto bg-white bg-image hover-zoom">
              <a href="https://cheerful-buttercream-ab2b51.netlify.app/home">
                <MDBCardImage
                  src="https://media.istockphoto.com/id/1325721913/vector/businessman-turning-quality-meter-arrow-back-with-rope-vector-isometric-illustration-price.jpg?s=2048x2048&w=is&k=20&c=bCEeekV-6t-gHjKOXGdQ23gwjU7IlJc8Q44JJVwAuIc="
                  className=" img-fluid absolute-center"
                  width={"200"}
                />
              </a>
            </div>
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
