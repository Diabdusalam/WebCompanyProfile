import React from "react";
import HeroPageAbout from "./component/Hero";
import { CompanyHistory } from "./component/CompanyHistory";
import { Teams } from "./component/Teams";
import { Culture } from "./component/Culture";

const AboutPage = () => {
  return (
    <>
      <HeroPageAbout />
      <CompanyHistory />
      <Teams />
      <Culture />
    </>
  );
};

export default AboutPage;
