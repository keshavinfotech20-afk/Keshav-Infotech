import React from 'react';
import { companyData } from './companyData';

export const WhyChooseUs = () => {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">The B2B Advantage</span>
          <h2 className="section-title">Why Businesses Choose Keshav Infotech</h2>
          <p className="section-desc" style={{ color: '#94A3B8' }}>
            Built around trust, service excellence, authentic sourcing, and long-term commercial relationships.
          </p>
        </div>

        <div className="why-us-grid">
          {companyData.whyChooseUs.map((item) => (
            <div key={item.number} className="why-card">
              <div className="why-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
