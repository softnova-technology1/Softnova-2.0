
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/GetStarted" element={<GetStarted />}/>
       
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
