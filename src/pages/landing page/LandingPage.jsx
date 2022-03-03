import React from "react";
import Hero from "./Hero/Hero"
import Meals from "./Meals/Meals"
import Diet from "./Diet/DietPage"
import MenuPage from "./menu/MenuPage";

const LandingPage = () => {
  return (
    <>
    <Hero />
    <Meals />
    <Diet />
    <MenuPage />
    </>
  );
};

export default LandingPage;
