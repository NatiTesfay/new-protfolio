import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

function AllProjects() {
  return (
    <MDBContainer className="my-5">
      <MDBRow className="text-center">
        <MDBCol md="6" className="mb-5 mb-md-3">
          <MDBCard className="testimonial-card  ">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <MDBCardImage
                src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className=" img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Netanel Tesfay</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Graduated from a software development course
                <MDBIcon fas icon="quote-right" className="pe-2" />
              </p>
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Open to Work
                <MDBIcon fas icon="quote-right" className="pe-2" />
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AllProjects;
