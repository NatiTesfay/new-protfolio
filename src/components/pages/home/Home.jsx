import React from "react";
import HomeUpper from "../../features/card/HomeUpper";
import AllProjects from "../../features/card/AllProjects";

function Home() {
  return (
    <>
    <div className=" d-flex justify-content-center  bg-dark bg-gradient p-5">
      <HomeUpper />
      <AllProjects />
    </div>
    </>
    
  );
}

export default Home;
