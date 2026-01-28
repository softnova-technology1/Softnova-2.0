import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Cursor from "./Cursor";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
    <Cursor/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutCarousel />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/services/service-1" element={<Service1 />} /> */}
        {/* <Route path="/services/service-2" element={<Service2 />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
         <Route path="/services/MobileAppSection" element={<MobileAppSection />} />
         <Route path="/services/ProjectsFlip" element={<ProjectsFlip />} />
             <Route path="/services/Software" element={<Software />} />
        {/* <Route path="/academy" element={<Academy />} /> */}
        {/* <Route path="/foundation" element={<Foundation />} /> */}
        {/* <Route path="/career" element={<Career />} /> */}
        <Route path="/gallery" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
