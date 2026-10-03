import React from 'react';
import { X, CheckCircle, ShieldCheck, Send, MessageSquare, Building } from 'lucide-react';
import { companyData } from './companyData';

export const ProductModal = ({ product, onClose, onRequestQuoteForProduct }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge badge-brand" style={{ marginBottom: '0.4rem' }}>
              {product.brand}
            </span>
            <h3 style={{ fontSize: '1.25rem', color: '#0F172A', margin: 0 }}>
              {product.name}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ maxHeight: '220px', maxWidth: '100%', objectFit: 'contain' }} 
              />
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Model: {product.model}
              </div>

              <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {product.desc}
              </p>

              <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.85rem', color: '#0369A1' }}>
                  <ShieldCheck size={16} /> Genuine Product Guarantee
                </div>
                <div style={{ fontSize: '0.78rem', color: '#0369A1', marginTop: '2px' }}>
                  Sourced from official Indian brand supply channels.
                </div>
              </div>

              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                Key Technical Specifications:
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {product.specs.map((spec, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: '#334155', marginBottom: '0.35rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle size={15} style={{ color: '#1E40AF', flexShrink: 0, marginTop: '3px' }} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.5rem', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>
                Need Corporate Pricing for {product.brand}?
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Speak to our team in Fort, Mumbai for bulk quote and specifications.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onRequestQuoteForProduct(product);
                }}
              >
                <Send size={16} /> Request Quote
              </button>

              <a 
                href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(`Hello Keshav Infotech, I would like a corporate quote for model: ${product.name} (${product.model})`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
