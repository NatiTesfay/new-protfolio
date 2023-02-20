import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import HomeUpper from "../../features/card/HomeUpper";
import AllProjects from "../../features/card/AllProjects";

function Home() {
  return (
    <MDBContainer className=" d-flex justify-content-center">
      <HomeUpper />
      <AllProjects />
    </MDBContainer>
  );
}

export default Home;
