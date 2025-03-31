// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/">Tyre Repair</a></li>
            <li><a href="/">Jump Start</a></li>
            <li><a href="/">Battery Change</a></li>
            <li><a href="/">Fuel Refuel</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="/">Email Us</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Road Mate. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
