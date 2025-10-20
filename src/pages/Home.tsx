import Hero from "../components/ui/Hero";
import ProductSlideList from "../components/ui/product/ProductSlideList";
import Benefits from "../components/ui/Benefits";
import Categories from "../components/ui/Categories";
import Testimonials from "../components/ui/Testimonials";
import Newsletter from "../components/ui/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ProductSlideList title="Nuestros Productos" />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;
