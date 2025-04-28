import HeaderLanding from "../../components/HeaderLanding";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import LanguageCards from "../../components/LanguageCards";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen" style={{ fontFamily: "inherit" }}>
        <HeaderLanding />
        <main>
          <Hero />
          <Features />
          <LanguageCards />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
