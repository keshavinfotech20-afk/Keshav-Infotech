import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { companyData } from './companyData';

export const Header = ({ currentRoute, navigateTo, onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', route: 'home' },
    { label: 'Products', route: 'products' },
    { label: 'Solutions', route: 'solutions' },
    { label: 'Brands', route: 'brands' },
    { label: 'About Us', route: 'about' },
    { label: 'Industries', route: 'industries' },
    { label: 'Contact', route: 'contact' }
  ];

  const handleNavClick = (route) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <header style={{ width: '100%' }}>
      {/* Top Utility Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-item">
            <MapPin size={14} className="text-sky-blue" />
            <span>Fort, Mumbai – 400001 (Mapla House, Modi St)</span>
          </div>

          <div className="top-bar-info">
            <div className="top-bar-item">
              <Phone size={14} />
              <span>Ashok Chaudhari: <a href="tel:9820804507">9820804507</a></span>
            </div>
            <div className="top-bar-item">
              <Mail size={14} />
              <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <nav className="main-navbar">
        <div className="container navbar-inner">
          <Logo onClick={() => handleNavClick('home')} />

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.route}>
                <button
                  className={`nav-link ${currentRoute === item.route ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.route)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Header Action Button */}
          <div className="nav-cta">
            <button className="btn btn-primary" onClick={onRequestQuote}>
              Request a Quote <ArrowRight size={16} />
            </button>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '0.65rem 0',
                  fontSize: '1.05rem',
                  fontWeight: currentRoute === item.route ? '700' : '500',
                  color: currentRoute === item.route ? '#1E40AF' : '#0F172A',
                  cursor: 'pointer',
                  borderBottom: '1px solid #F1F5F9'
                }}
              >
                {item.label}
              </button>
            ))}

            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => { setMobileMenuOpen(false); onRequestQuote(); }}
              >
                Request a Quote
              </button>

              <a 
                href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={16} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
