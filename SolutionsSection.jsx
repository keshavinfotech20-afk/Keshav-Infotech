import React from 'react';
import { 
  Briefcase, Monitor, Network, Printer, HardDrive, 
  Zap, Camera, Wrench, Check, ArrowRight 
} from 'lucide-react';
import { solutionsData } from './solutionsData';

export const SolutionsSection = ({ onRequestQuote }) => {
  const iconMap = {
    Briefcase: <Briefcase size={26} />,
    Monitor: <Monitor size={26} />,
    Network: <Network size={26} />,
    Printer: <Printer size={26} />,
    HardDrive: <HardDrive size={26} />,
    Zap: <Zap size={26} />,
    Camera: <Camera size={26} />,
    Wrench: <Wrench size={26} />
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Business IT Solutions</span>
          <h2 className="section-title">Technology Sourcing Built Around Business Requirements</h2>
          <p className="section-desc">
            We help organizations configure, select, and procure complete technology infrastructure suited to modern office operations.
          </p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {solutionsData.map((sol) => (
            <div 
              key={sol.id} 
              style={{
                backgroundColor: 'var(--bg-page)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
            >
              <div 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--light-sky-bg)',
                  color: 'var(--brand-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                {iconMap[sol.icon] || <Briefcase size={26} />}
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{sol.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem', flexGrow: 1 }}>
                {sol.desc}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                {sol.features.map((feat, idx) => (
                  <li 
                    key={idx} 
                    style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-body)', 
                      marginBottom: '0.4rem', 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.5rem' 
                    }}
                  >
                    <Check size={16} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="btn btn-secondary btn-sm" 
                onClick={onRequestQuote}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Discuss Requirement <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Tailored Consultation Copy Banner */}
        <div 
          style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, var(--light-sky-bg) 0%, #E0F2FE 100%)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '16px',
            padding: '2.5rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ color: 'var(--primary-navy)', fontSize: '1.35rem', marginBottom: '0.75rem' }}>
            Have a specialized IT Hardware or Software requirement?
          </h3>
          <p style={{ color: 'var(--text-body)', fontSize: '1.02rem', maxWidth: '820px', margin: '0 auto 1.5rem' }}>
            Discuss your requirement with our team and we can help you identify the appropriate products and technology solutions from our portfolio.
          </p>
          <button className="btn btn-primary btn-lg" onClick={onRequestQuote}>
            Connect with Our IT Team
          </button>
        </div>
      </div>
    </section>
  );
};
