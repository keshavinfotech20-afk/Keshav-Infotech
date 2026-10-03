import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, Building2, Server, CheckCircle2 } from 'lucide-react';
import { companyData } from './companyData';

export const Hero = ({ onRequestQuote, onExploreProducts, onContactUs }) => {
  return (
    <section className="hero-section">
      <div className="hero-glow"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Messaging */}
          <div>
            <div className="hero-tag">
              <Building2 size={15} />
              <span>Based in Fort, Mumbai • B2B Technology Supplier</span>
            </div>

            <h1 className="hero-title">
              Your Trusted IT Partner for Hardware, Software & Technology Solutions
            </h1>

            <p className="hero-subtitle">
              Reliable IT Products. Trusted Brands. Professional Service.
            </p>

            <p className="hero-desc">
              Keshav Infotech helps businesses source reliable IT hardware, software and technology solutions from leading brands available in India — backed by experience, responsive service and dependable support.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={onRequestQuote}>
                Request a Quote <ArrowRight size={18} />
              </button>

              <button className="btn btn-outline-white btn-lg" onClick={onExploreProducts}>
                Explore Products
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button 
                onClick={onContactUs} 
                className="hero-specialist-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <PhoneCall size={16} style={{ color: '#38BDF8' }} />
                <span>Talk to an IT Specialist (Ashok Chaudhari)</span>
              </button>
            </div>

            <div 
              style={{ 
                marginTop: '2.5rem', 
                paddingTop: '1.5rem', 
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E1', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} style={{ color: '#38BDF8' }} /> Genuine Products
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E1', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} style={{ color: '#38BDF8' }} /> Corporate Procurement
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E1', fontSize: '0.85rem' }}>
                <CheckCircle2 size={16} style={{ color: '#38BDF8' }} /> Responsive Support
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div>
            <div className="hero-visual-card">
              <div className="hero-img-frame">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                  alt="Enterprise Network & IT Infrastructure Setup" 
                />
              </div>

              <div className="hero-visual-badge">
                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <Server size={20} />
                  </div>
                  <div className="hero-badge-text">
                    <p>Enterprise IT Portfolio</p>
                    <p>Networking, Storage, Peripherals & CCTV</p>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span 
                    style={{ 
                      fontSize: '0.75rem', 
                      color: '#38BDF8', 
                      fontWeight: 700, 
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em' 
                    }}
                  >
                    Fort, Mumbai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
