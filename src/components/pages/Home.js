import React from "react";

import NavBar from "./NavBar";
import Movies from "./Movies";
import Genre from "./Genre";
import '../../styles/home.css'


const Home = () => {
  return (
    <>
      <NavBar />
      {/* if search something we have to remove this container - todo */}
      <div class="container">
        <div class="flex-four">
          <Genre />
        </div>
        <div class="flex-eight">
          <Movies />
        </div>
      </div>
    </>
  );
};

export default Home;
