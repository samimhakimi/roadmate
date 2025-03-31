import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import Footer from "./components/Footer";  
import Service from "./components/Services";  
import Contact from "./components/Contact";  
import About from "./components/About";   

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Service />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Service />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}