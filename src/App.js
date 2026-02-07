
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer";
import Achievements from "./Components/Gallery/GalleryImg";
import Products from "./Components/Our-Product/Product";
import Services from "./Components/OurServices/Main";
import WebDevelopment from "./Components/OurServices/Web";
import MobileAppSection from "./Components/OurServices/Mobile";
import CareerForm from "./Components/Career/Careers";
import GraphicDesign from "./Components/OurServices/Graphic";
import DigitalMarketing from "./Components/OurServices/Digital";
import OtherServices from "./Components/OurServices/Other";
import Cursor from "./Cursor";
import Contact from "./Components/Contact/Contact";
import RocketMenu from "./Components/Rocket";
import ImageCardSection from "./Components/Our-Product/Product";
import TermsAndConditions from "./Components/TermsandConditions";
import PrivacyPolicy from "./Components/Privacypolicy";
import ScrollToTop from "./Components/ScrollToTop";
import GetStarted from "./Components/Home/Getstarted";
import About from "./Components/About/About";
import ECommerce from "./Components/OurServices/E-Commerce";
import CloudandIT from "./Components/OurServices/Cloud";
import SoftwareDevelopment from "./Components/OurServices/Software";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Components/Preloader/Preloader";


function AppContent() {
  const location = useLocation();
  const isHeroPage = location.pathname === "/";

  return (
    <>
      <Cursor />

      {!isHeroPage && <Navbar />}
      {isHeroPage && <RocketMenu />}


      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/ImageCardSection" element={<ImageCardSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
        <Route
          path="/services/MobileAppSection"
          element={<MobileAppSection />}
        />
        <Route path="/services/ECommerce" element={<ECommerce />} />
        <Route path="/services/SoftwareDevelopment" element={<SoftwareDevelopment />} />
        <Route path="/services/GraphicDesign" element={<GraphicDesign />} />
        <Route
          path="/services/DigitalMarketing"
          element={<DigitalMarketing />}
        />
        <Route path="/services/OtherServices" element={<OtherServices />} />
        <Route path="/services/CloudandIT" element={<CloudandIT />} />
        <Route path="/career" element={<CareerForm />} />
        <Route path="/gallery" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/GetStarted" element={<GetStarted />} />

      </Routes>

      <Footer />
    </>
  );
}


function App() {
  // Initialize loading state based on session storage
  const [loading, setLoading] = useState(() => {
    // Check if the user has visited in this session
    const hasVisited = sessionStorage.getItem("softnova_visited");
    return !hasVisited;
  });

  const handleFinishLoading = () => {
    setLoading(false);
    // Mark session as visited so it doesn't show again on refresh
    sessionStorage.setItem("softnova_visited", "true");
  };

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && (
          <Preloader key="preloader" finishLoading={handleFinishLoading} />
        )}
      </AnimatePresence>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
