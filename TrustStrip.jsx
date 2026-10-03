import React from 'react';
import { Award, ShieldCheck, Building2, Headset, Tag, Users, CheckCircle } from 'lucide-react';
import { companyData } from './companyData';

export const TrustStrip = () => {
  const iconsMap = {
    "Leading Brands": <Award size={24} />,
    "Genuine Products": <ShieldCheck size={24} />,
    "Corporate IT Supply": <Building2 size={24} />,
    "Responsive Support": <Headset size={24} />,
    "Competitive Pricing": <Tag size={24} />,
    "Experienced IT Professionals": <Users size={24} />
  };

  return (
    <section className="trust-strip-section">
      <div className="container">
        {/* Credibility Cards Grid */}
        <div className="trust-grid">
          {companyData.trustHighlights.map((item, idx) => (
            <div key={idx} className="trust-card">
              <div className="trust-icon">
                {iconsMap[item.title] || <CheckCircle size={24} />}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Built on Experience. Driven by Reliability statement banner */}
        <div className="experience-banner">
          <div className="experience-content">
            <h3>Built on Experience. Driven by Reliability.</h3>
            <p>
              With experience across the IT and ITeS ecosystem, Keshav Infotech helps organizations source the technology products and solutions they need with a focus on product quality, service excellence and dependable business relationships.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <span className="badge badge-brand" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
              Fort, Mumbai Presence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
