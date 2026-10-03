import React from 'react';
import { Target, Compass, MapPin, Building, ShieldCheck, PhoneCall, Mail } from 'lucide-react';
import { companyData } from './companyData';

export const AboutSection = ({ onRequestQuote }) => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Main Header */}
        <div className="section-header">
          <span className="section-subtitle">About Keshav Infotech</span>
          <h1 className="section-title">Technology Procurement Built Around Trust</h1>
          <p className="section-desc">
            Your trusted B2B IT hardware, software and services partner based in Fort, Mumbai.
          </p>
        </div>

        {/* Company Background Card */}
        <div 
          style={{
            backgroundColor: 'var(--bg-page)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-blue)', marginBottom: '1.25rem' }}>
              “{companyData.positioning}”
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 0 }}>
              “{companyData.backgroundCopy}”
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {/* Vision Card */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              color: '#FFFFFF',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div 
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.15)',
                color: 'var(--sky-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <Compass size={28} />
            </div>

            <span 
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--sky-blue)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              OUR VISION
            </span>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Corporate Excellence in IT Sourcing
            </h3>

            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
              “{companyData.vision}”
            </p>
          </div>

          {/* Mission Card */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #1E40AF 0%, #0284C7 100%)',
              color: '#FFFFFF',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div 
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <Target size={28} />
            </div>

            <span 
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#E0F2FE',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              OUR MISSION
            </span>

            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
              Service Excellence & Genuine Quality
            </h3>

            <p style={{ color: '#E0F2FE', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
              “{companyData.mission}”
            </p>
          </div>
        </div>

        {/* Location & Team Contact Card */}
        <div 
          style={{
            backgroundColor: 'var(--bg-page)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-blue)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <MapPin size={16} /> Based in Fort, Mumbai
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Keshav Infotech Commercial Office
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', margin: 0 }}>
              91 Mapla House, Modi Street, Fort, Mumbai – 400001
            </p>
            <div style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Primary Key Contact: <strong>Ashok Chaudhari (9820804507)</strong>
            </div>
          </div>

          <div>
            <button className="btn btn-primary btn-lg" onClick={onRequestQuote}>
              Request a B2B Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
