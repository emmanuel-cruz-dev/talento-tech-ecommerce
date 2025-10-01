import React from "react";
import Hero from "../components/ui/Hero";
import ProductList from "../components/ui/product/ProductList";
import Benefits from "../components/ui/Benefits";
import Categories from "../components/ui/Categories";
import Testimonials from "../components/ui/Testimonials";
import Newsletter from "../components/ui/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ProductList />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;
