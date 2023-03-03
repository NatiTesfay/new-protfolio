import React from "react";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

function Contact_me() {
  return (
    <form className="m-4 p-3 text-light">
      <MDBInput
        className="mb-4  text-light"
        type="text"
        id="form2Example2"
        label="full name"
        
      />
      <MDBInput
        className="mb-4  text-light"
        type="email"
        id="form2Example1"
        label="Email address"
      />
      <MDBTextArea
        label="Message"
        id="textAreaExample"
        rows={4}
        className="mb-4  text-light"
      />

      <MDBBtn type="submit" className="mb-4" block>
        send
      </MDBBtn>
    </form>
  );
}
export default Contact_me;
