import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./section/Hero";
import Benifits from "./section/Benifits";
import Collobration from "./section/Collobration";
import Services from "./section/Services";
import Pricing from "./section/Pricing";
import Roadmap from "./section/Roadmap";
import Footer from "./section/Footer";
function App() {
  return (
    <>
      <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <section className="mt-10">
          <Hero />
          <Benifits />
          <Collobration />
          <Services />
          <Pricing />
          <Roadmap />
          <Footer />
        </section>
      </main>
      <ButtonGradient />
    </>
  );
}

export default App;
