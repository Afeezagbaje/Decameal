import React from "react";
import Hero from "./Hero/Hero"
import Meals from "./Meals/Meals"
import Diet from "./Diet/DietPage"
import MenuPage from "./menu/MenuPage";
import TestimonialSection from "../../components/testimonial"
import Notification from "../../components/notification";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Meals />
      <Diet />
      <MenuPage />
      <TestimonialSection />
      <Notification />
      <Footer />
    </>
  );
};

export default LandingPage;
