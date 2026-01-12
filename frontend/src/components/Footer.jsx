import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Milan Readymades</h2>
          <p className="about-text">
            Established in the heart of Vadapalani, Chennai, Milan Readymades has been serving the community with 
            exquisite traditional and contemporary clothing for over years. We pride ourselves on offering 
            premium quality garments for men, women, and children, carefully curated to meet the diverse fashion 
            needs of our valued customers.
          </p>
          <p className="about-text">
            Our collection ranges from elegant traditional wear including sarees, kurtas, and ethnic ensembles to 
            modern western outfits. Every piece in our store is selected with attention to quality, style, and 
            affordability. Visit us to experience personalized service and discover fashion that celebrates your 
            unique style.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-grid">
          {/* Address */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <MapPin className="contact-icon" />
            </div>
            <h3 className="contact-label">Visit Us</h3>
            <p className="contact-info">
              Milan Readymades<br />
              Vadapalani, Chennai<br />
              Tamil Nadu, India
            </p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone className="contact-icon" />
            </div>
            <h3 className="contact-label">Call Us</h3>
            <a href="tel:+918072153196" className="contact-link">
              +91 80721 53196
            </a>
            <a href="https://wa.me/918072153196" className="contact-link whatsapp-link" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>

          {/* Instagram */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Instagram className="contact-icon" />
            </div>
            <h3 className="contact-label">Follow Us</h3>
            <a href="https://instagram.com/milanreadymades" className="contact-link" target="_blank" rel="noopener noreferrer">
              @milanreadymades
            </a>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail className="contact-icon" />
            </div>
            <h3 className="contact-label">Email Us</h3>
            <a href="mailto:info@milanreadymades.com" className="contact-link">
              info@milanreadymades.com
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="map-section">
          <h3 className="map-title">Our Location</h3>
          <div className="map-placeholder">
            <div className="map-text">
              <MapPin size={48} className="map-icon" />
              <p>Google Maps Integration</p>
              <p className="map-note">Vadapalani, Chennai - Map will be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Milan Readymades. All rights reserved.</p>
        <p className="footer-tagline">Elegant Fashion for Every Occasion</p>
      </div>
    </footer>
  );
};