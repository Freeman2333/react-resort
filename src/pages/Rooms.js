import React from "react";
import Hero from "../comps/Hero";

import Banner from "../comps/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "./../comps/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
