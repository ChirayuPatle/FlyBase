import HeaderLanding from "../../components/HeaderLanding";
import Hero from "../../components/Hero";
// import Features from "../../components/Features";
// import LanguageCards from "../../components/LanguageCards";
// import CTA from "../../components/CTA";

const LandingPage = () => {
  return (
    <>
    <div className="bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-800 text-white h-screen">
        <div className="min-h-screen" style={{ fontFamily: "inherit" }}>
          <HeaderLanding />
          <main>
            <Hero />
            {/* <Features /> */}
            {/* <LanguageCards /> */}
            {/* <CTA /> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
