import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Subjects from "./sections/Subjects";
import Preview from "./sections/Preview";
import Testimonials from "./sections/Testimonials";
import Roadmap from "./sections/Roadmap";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <Preview />
      <Testimonials />
      <CTA />
      <Footer />
     
    </div>
  );
}

export default App;