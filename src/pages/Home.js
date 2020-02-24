import React from "react";
import Hero from "../comps/Hero";
import Banner from "../comps/Banner";
import { Link } from "react-router-dom";

import Services from "./../comps/Services";
import FeaturedRooms from "../comps/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms{" "}
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRooms />
    </>
  );
}
