import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/services/service-1" element={<Service1 />} /> */}
        {/* <Route path="/services/service-2" element={<Service2 />} /> */}
        {/* <Route path="/academy" element={<Academy />} /> */}
        {/* <Route path="/foundation" element={<Foundation />} /> */}
        {/* <Route path="/career" element={<Career />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
