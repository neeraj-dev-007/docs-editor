import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div className="flex flex-col m-4">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default LandingPage;
