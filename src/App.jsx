import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Testimonials from "./components/Testimonials/Testimonials";
import ServicesSection from "./components/Service/Service";
import ServiceItem from "./components/Service0/ServiceItem";
const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <ServiceItem />
      <ServicesSection />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
