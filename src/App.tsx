import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import { About as AboutSection } from "./components/About";
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
import BrandingAndDesigning from "./pages/branding-and-designing";
import SocialMediaMarketingAndManagement from "./pages/social-media-marketing-and-management";
import UIAndUXDesign from "./pages/ui-and-ux-design";
import ContentCreation from "./pages/content-creation";
import WebDesignAndDevelopment from "./pages/web-design-and-development";
import ProfitablePerformanceMarketing from "./pages/profitable-performance-marketing";

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
              <AboutSection />
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
        <Route path="/services/social-media-marketing-and-management" element={<SocialMediaMarketingAndManagement />} />
        <Route path="/services/branding-and-designing" element={<BrandingAndDesigning />} />
        <Route path="/services/ui-and-ux-design" element={<UIAndUXDesign />} />
        <Route path="/services/content-creation" element={<ContentCreation />} />
        <Route path="/services/web-design-and-development" element={<WebDesignAndDevelopment />} />
        <Route path="/services/profitable-performance-marketing" element={<ProfitablePerformanceMarketing />} />
      </Routes>
    </Router>
  );
}

export default App;
