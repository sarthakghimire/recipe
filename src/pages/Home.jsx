import React from "react";
import Navbar from "./../components/Navbar";
import HeroSection from "./../components/HeroSection";
import BrowseByCategory from "./../components/BrowseByCategory";
import BrowseByCountry from "./../components/BrowseByCountry";
import OurPick from "./../components/OurPick";
import Footer from "./../components/Footer";
import ContactForm from "./../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BrowseByCategory />
      <BrowseByCountry />
      <OurPick />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
