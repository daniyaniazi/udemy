import React from "react";
import Banner from "../components/Banner/Banner";
import BussinessAdvertisement from "../components/BusinessAdvert";
import Categories from "../components/Categories";
import EducationAdvert from "../components/EducationAdvert";
import Explore from "../components/Explore";
import ImportantLinks from "../components/ImportantLinks";
import InstructorAdvertisement from "../components/InstructorAdvert";
import TopCategories from "../components/TopCategories/index";
import TrustedCompanies from "../components/TrustedCompanies";

const Home = () => {
  return (
    <div>
      <Banner />
      <Explore />
      <TopCategories />
      <Categories />
      <InstructorAdvertisement />
      <TrustedCompanies />
      <BussinessAdvertisement />
      <EducationAdvert />
    </div>
  );
};

export default Home;
