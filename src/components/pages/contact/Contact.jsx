import { div } from "mdb-react-ui-kit";
import React from "react";
import Contact_me from "../../features/form/Contact_me";

function Contact() {
  return (
    <>
       <div className=" bg-dark bg-gradient">
      <h4 className="text-center text-light p-5">Contact Me</h4>
        <Contact_me />
        <br />
        <br />
      </div>
    </>
  );
}

export default Contact;
