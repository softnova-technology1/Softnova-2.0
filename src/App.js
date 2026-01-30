// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./Components/Home/Hero";
// import Navbar from "./Components/Home/Navbar";
// import Footer from "./Components/Footer";
// import Achievements from "./Components/Gallery/GalleryImg";
// import AboutCarousel from "./Components/Screenslide";
// import Products from "./Components/Our-Product/Product";
// import Services from "./Components/OurServices/Main";
// import WebDevelopment from "./Components/OurServices/Web";
// import MobileAppSection from "./Components/OurServices/Mobile";
// import ProjectsFlip from "./Components/OurServices/E-Commerce";
// import Software from "./Components/OurServices/Software";
// import CareerForm from "./Components/Career/Careers";
// import GraphicDesign from "./Components/OurServices/Graphic";
// import DigitalMarketing from "./Components/OurServices/Digital";
// import OtherServices from "./Components/OurServices/Other";
// import CloudIT from "./Components/OurServices/Cloud";
// import Cursor from "./Cursor";
// import Contact from "./Components/Contact/Contact";
// function App() {
//   return (
//     <BrowserRouter>
//     <Cursor/>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/about" element={<AboutCarousel />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
//          <Route path="/services/MobileAppSection" element={<MobileAppSection />} />
//          <Route path="/services/ProjectsFlip" element={<ProjectsFlip />} />
//              <Route path="/services/Software" element={<Software />} />
//              <Route path="/services/GraphicDesign" element={<GraphicDesign />} />
//              <Route path="/services/DigitalMarketing" element={<DigitalMarketing />} />
//              <Route path="/services/OtherServices" element={<OtherServices />} />
//               <Route path="/services/CloudIT" element={<CloudIT />} />
//         <Route path="/career" element={<CareerForm />} />
//         <Route path="/gallery" element={<Achievements />} />
//         <Route path="/contact" element={<Contact />} />       
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer";
import Achievements from "./Components/Gallery/GalleryImg";
import AboutCarousel from "./Components/Screenslide";
import Products from "./Components/Our-Product/Product";
import Services from "./Components/OurServices/Main";
import WebDevelopment from "./Components/OurServices/Web";
import MobileAppSection from "./Components/OurServices/Mobile";
import ProjectsFlip from "./Components/OurServices/E-Commerce";
import Software from "./Components/OurServices/Software";
import CareerForm from "./Components/Career/Careers";
import GraphicDesign from "./Components/OurServices/Graphic";
import DigitalMarketing from "./Components/OurServices/Digital";
import OtherServices from "./Components/OurServices/Other";
import CloudIT from "./Components/OurServices/Cloud";
import Cursor from "./Cursor";
import Contact from "./Components/Contact/Contact";
import RocketMenu from "./Components/Rocket";

function AppContent() {
  const location = useLocation();
  const isHeroPage = location.pathname === "/";

  return (
    <>
      <Cursor />

      {!isHeroPage && <Navbar />}
      {isHeroPage && <RocketMenu />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutCarousel />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/services/MobileAppSection" element={<MobileAppSection />} />
        <Route path="/services/ProjectsFlip" element={<ProjectsFlip />} />
        <Route path="/services/Software" element={<Software />} />
        <Route path="/services/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/services/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/services/OtherServices" element={<OtherServices />} />
        <Route path="/services/CloudIT" element={<CloudIT />} />
        <Route path="/career" element={<CareerForm />} />
        <Route path="/gallery" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />       
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