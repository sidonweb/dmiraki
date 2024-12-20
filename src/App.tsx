import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import ServicesPage from "@/pages/Services"
import "./App.css";

function App() {
  return (
    <Router>
      {/* Ensure the Navbar is rendered for all pages */}
      <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Sponsors />
              <About />
              <HowItWorks />
              <Features />
              <Services />
              <Cta />
              <Testimonials />
              <Team />
              <Pricing />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
