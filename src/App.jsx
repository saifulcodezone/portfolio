import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";  <-- এই লাইনটি মুছে ফেলুন
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark selection:bg-brand selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Portfolio />
        <Stats />
        <FAQ />
        {/* <Contact />  <-- এই ট্যাগটি ও মুছে ফেলুন */}
      </main>

      {/* Footer এর ভেতরেই কন্টাক্ট সেকশন আছে, তাই শুধু Footer থাকবে */}
      <Footer />
    </div>
  );
}

export default App;
