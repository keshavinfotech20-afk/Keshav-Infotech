import React from 'react';
import { Building2, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { industriesData } from './solutionsData';

export const IndustriesSection = ({ onRequestQuote }) => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Use Cases & Industry Alignment</span>
          <h2 className="section-title">Technology Supply for Modern Businesses</h2>
          <p className="section-desc">
            We understand the distinct hardware and technology procurement needs of diverse commercial enterprises in India.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}
        >
          {industriesData.map((ind, idx) => (
            <div 
              key={idx} 
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
            >
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--brand-blue)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem'
                }}
              >
                <Building2 size={16} /> Industry Sector
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                {ind.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem', flexGrow: 1 }}>
                {ind.desc}
              </p>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: 'auto' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Recommended Product Sourcing:
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {ind.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-body)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={onRequestQuote}>
            Enquire for Your Business Category <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
