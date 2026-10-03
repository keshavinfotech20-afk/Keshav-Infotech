import React from 'react';
import { brandsData } from './brandsData';
import { ShieldCheck } from 'lucide-react';

export const BrandsGrid = ({ onSelectBrand }) => {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Brand Portfolio</span>
          <h2 className="section-title">Leading Brands Across Our IT Product Portfolio</h2>
          <p className="section-desc">
            We provide corporate access to IT hardware, software and services from renowned technology manufacturers available in India.
          </p>
        </div>

        <div className="brands-logo-grid">
          {brandsData.map((brand, idx) => (
            <div 
              key={idx} 
              className="brand-chip"
              onClick={() => onSelectBrand && onSelectBrand(brand.name)}
              style={{ cursor: onSelectBrand ? 'pointer' : 'default' }}
            >
              <div className="brand-name">{brand.name}</div>
              <div className="brand-scope">{brand.tag}</div>
            </div>
          ))}
        </div>

        <div 
          style={{ 
            marginTop: '3rem', 
            textAlign: 'center', 
            background: 'var(--light-sky-bg)', 
            borderRadius: '12px', 
            padding: '1.25rem 2rem',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            maxWidth: '720px',
            margin: '3rem auto 0',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <ShieldCheck size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.9rem', color: 'var(--primary-navy)', fontWeight: 600 }}>
            100% Genuine Products • Standard Brand Manufacturer Warranty Applies
          </span>
        </div>
      </div>
    </section>
  );
};
