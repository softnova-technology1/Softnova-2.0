import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Home/Hero";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer";
import Achievements from "./Components/Gallery/GalleryImg";
import AboutCarousel from "./Components/Screenslide";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutCarousel />} />
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/services/service-1" element={<Service1 />} /> */}
        {/* <Route path="/services/service-2" element={<Service2 />} /> */}
        {/* <Route path="/academy" element={<Academy />} /> */}
        {/* <Route path="/foundation" element={<Foundation />} /> */}
        {/* <Route path="/career" element={<Career />} /> */}
        <Route path="/gallery" element={<Achievements />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
