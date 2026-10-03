import React from 'react';

export const Logo = ({ variant = 'light', size = 'medium', onClick }) => {
  const isDark = variant === 'dark';
  
  const widthMap = {
    small: 180,
    medium: 220,
    large: 260
  };

  const currentWidth = widthMap[size] || 220;

  return (
    <div 
      className={`brand-logo-container ${isDark ? 'is-dark' : ''}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none'
      }}
    >
      <svg 
        width="42" 
        height="42" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Geometric IT Cube / Node Emblem */}
        <rect x="4" y="4" width="40" height="40" rx="10" fill={isDark ? "#1E293B" : "#0F172A"} />
        <path d="M14 14L24 8L34 14V26L24 32L14 26V14Z" stroke="#38BDF8" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 8V32" stroke="#1D4ED8" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M14 14L34 26" stroke="#38BDF8" strokeWidth="1.5" opacity="0.6" />
        <circle cx="24" cy="20" r="4" fill="#38BDF8" />
        <circle cx="14" cy="14" r="2.5" fill="#1D4ED8" />
        <circle cx="34" cy="14" r="2.5" fill="#1D4ED8" />
        <circle cx="24" cy="32" r="2.5" fill="#38BDF8" />
        <path d="M16 38H32" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span 
          style={{
            fontFamily: "'Outfit', 'Inter', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: isDark ? '#FFFFFF' : '#0F172A',
            textTransform: 'uppercase'
          }}
        >
          KESHAV <span style={{ color: '#0284C7' }}>INFOTECH</span>
        </span>
        <span 
          style={{
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: isDark ? '#94A3B8' : '#64748B',
            textTransform: 'uppercase',
            marginTop: '2px'
          }}
        >
          IT Hardware, Software & Services
        </span>
      </div>
    </div>
  );
};
