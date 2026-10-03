import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { companyData } from './companyData';

export const Footer = ({ navigateTo, onOpenLegal }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-col">
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo variant="dark" />
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              “{companyData.tagline}”
            </p>

            <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '380px' }}>
              {companyData.positioning}
            </p>

            <a 
              href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ display: 'inline-flex', gap: '0.5rem' }}
            >
              <MessageSquare size={16} /> Chat With Us on WhatsApp
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Products Catalogue</a></li>
              <li><a href="#solutions" onClick={(e) => { e.preventDefault(); navigateTo('solutions'); }}>IT Solutions</a></li>
              <li><a href="#brands" onClick={(e) => { e.preventDefault(); navigateTo('brands'); }}>Brands Portfolio</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About Us</a></li>
              <li><a href="#industries" onClick={(e) => { e.preventDefault(); navigateTo('industries'); }}>Industries</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Core Categories */}
          <div className="footer-col">
            <h4>Product Scope</h4>
            <ul className="footer-links">
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Keyboards & Mice</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Webcams & Audio</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Enterprise Networking</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Storage & RAM Memory</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>APC UPS & Power</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Printers & Scanners</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateTo('products'); }}>Hikvision CCTV</a></li>
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div className="footer-col">
            <h4>Fort, Mumbai Office</h4>

            <div className="footer-contact-item">
              <MapPin size={18} style={{ color: '#38BDF8', flexShrink: 0, marginTop: '2px' }} />
              <span>
                91 Mapla House, Modi Street,<br />
                Fort, Mumbai – 400001
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} style={{ color: '#38BDF8', flexShrink: 0, marginTop: '2px' }} />
              <div>
                Ashok Chaudhari: <a href="tel:9820804507" style={{ color: '#FFFFFF', fontWeight: 600 }}>9820804507</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} style={{ color: '#38BDF8', flexShrink: 0, marginTop: '2px' }} />
              <a href={`mailto:${companyData.email}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>
                {companyData.email}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal Strip */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Keshav Infotech. All Rights Reserved. • Based in Fort, Mumbai
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button 
              onClick={() => onOpenLegal('privacy')} 
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '0.85rem' }}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal('terms')} 
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', fontSize: '0.85rem' }}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
