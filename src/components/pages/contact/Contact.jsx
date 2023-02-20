import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Contact_me from "../../features/form/Contact_me";

function Contact() {
  return (
    <MDBContainer className="row-cols-1 row-cols-md-4 g-2 p-4  d-flex justify-content-center">
      <Contact_me />
    </MDBContainer>
  );
}

export default Contact;
