// src/components/Footer.tsx
import React from "react";

const Footer = () => (
  <footer className="bg-[#8b826f] text-white pt-10 pb-5">
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
      {/* Logo and Title */}
      <img
        src="/navgrihini-logo.jpg"
        alt="Navgrihini Logo"
        className="w-32 md:w-44 mb-4"
        style={{ objectFit: 'contain' }}
      />
      <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-4 text-[#fff] tracking-widest">
        EVA COLLECTION
      </h1>
      <div className="flex flex-wrap justify-center gap-10 text-center text-lg md:text-xl mb-8">
        <div>
          <h2 className="font-bold">Client Service</h2>
          <div>After-sale Service</div>
          <div>Free Insurance</div>
        </div>
        <div>
          <h2 className="font-bold">Our Brand</h2>
          <div>The Company</div>
          <div>The Excellence</div>
          <div>International Awards</div>
          <div>Our Story</div>
        </div>
        <div>
          <h2 className="font-bold">Luxury Clothing</h2>
          <div>Special Edition</div>
          <div>Summer Edition</div>
          <div>Unique Collection</div>
        </div>
      </div>
      {/* Social Icons */}
      <div className="mb-4">
        <span className="mr-2">Follow us on:</span>
        {/* Insert real links/icons as needed */}
        <a href="#" className="inline-block mx-1 text-white opacity-80 hover:opacity-100">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="inline-block mx-1 text-white opacity-80 hover:opacity-100">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="inline-block mx-1 text-white opacity-80 hover:opacity-100">
          <i className="fab fa-youtube"></i>
        </a>
        {/* Add more if needed */}
      </div>
      {/* Footer base */}
      <div className="mt-4 text-sm md:text-base">
        <div className="mb-2">Worldwide / English <span>&#9662;</span></div>
        <div>All rights reserved &copy;2025</div>
        <div className="flex flex-wrap justify-center gap-4 mt-2 opacity-70">
          <span>Cookie Policy</span>
          <span>Privacy Policy</span>
          <span>Legal Notes</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
