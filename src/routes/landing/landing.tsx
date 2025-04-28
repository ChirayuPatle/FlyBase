// import { motion } from "framer-motion";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import LanguageCards from "../../components/LanguageCards";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          all: "initial" /* Resets inherited styles */,
        }}
      >
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        `}
        </style>

        <div
          className="bg-black text-white min-h-screen"
          style={{ fontFamily: "inherit" }}
        >
          <Header />
          <main>
            <Hero />
            <Features />
            <LanguageCards />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
