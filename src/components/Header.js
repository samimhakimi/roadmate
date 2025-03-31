import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import "./Header.css"; // Import the updated CSS file
import logo from "../assets/images/logo.jpeg"; // Import the logo image


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
       
        <img  src={logo} alt="Logo" className="logos" />

        {/* Hamburger Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <a href="/" className={menuOpen ? "nav-menu open" : "nav-menu"} >Home</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/services" onClick={closeMenu}>Services</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          {/* WhatsApp Icon and Text */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-icon"
          >
            <FaWhatsapp size={24} className="whatsappicon" />
            <span className="whatsapp-text">Chat on WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
