// src/components/Services.js
import React from 'react';
import './Services.css'; // Ensure you have the updated CSS
import Main from './Main';

import tyre from "../assets/images/tyre-repair.png"; // Import the logo image

function Services() {
  const services = [
    { id: 1, title: 'Tyre Repair', imgSrc: tyre, link: '/tyre-repair' },
    { id: 2, title: 'Jump Start', imgSrc: tyre, link: '/jump-start' },
    { id: 3, title: 'Battery Change', imgSrc: tyre, link: '/battery-change' },
    { id: 4, title: 'Fuel Refuel', imgSrc: tyre, link: '/fuel-refuel' },
    { id: 5, title: 'Engine Diagnostics', imgSrc: tyre, link: '/engine-diagnostics' },
    { id: 6, title: 'Oil Change', imgSrc: tyre, link: '/oil-change' },
    { id: 7, title: 'Brake Service', imgSrc: tyre, link: '/brake-service' },
    { id: 8, title: 'AC Service', imgSrc: tyre, link: '/ac-service' },
  ];

  return (
    <section className="services">
      <h2 className="services-title">Services We Offer</h2>
      <div style={{paddingBottom: 25}}></div>
      <div className="services-container">
        {services.map((service) => (
          <a key={service.id} href={service.link} className="service-box-link">
             
            <div className="service-box">
              <img src={service.imgSrc} alt={service.title} className="service-img" />
              
            </div>
          </a>
        ))}
      </div>
      <Main/>
    </section>
  );
}

export default Services;
