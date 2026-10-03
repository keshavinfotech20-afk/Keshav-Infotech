import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { productCategories } from './productsData';

export const QuoteModal = ({ isOpen, onClose, selectedProduct }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    category: 'all',
    requirement: '',
    quantity: '1',
    message: ''
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        category: selectedProduct.category || 'all',
        requirement: `Quote for: ${selectedProduct.name} (Model: ${selectedProduct.model})`
      }));
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge badge-brand" style={{ marginBottom: '0.35rem' }}>
              Corporate Procurement Enquiry
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', margin: 0 }}>
              Request a B2B Quotation
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <CheckCircle2 size={54} style={{ color: 'var(--brand-blue)', margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                Quote Request Submitted Successfully
              </h4>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                Thank you, <strong>{formData.name}</strong>. Our team will review your requirement and get back to you.
              </p>
              <button className="btn btn-primary" onClick={onClose}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="modal-name">Your Name *</label>
                  <input 
                    type="text" 
                    id="modal-name" 
                    name="name" 
                    required 
                    placeholder="e.g. Vikram Mehta"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-company">Company Name *</label>
                  <input 
                    type="text" 
                    id="modal-company" 
                    name="companyName" 
                    required 
                    placeholder="e.g. Nexus Tech Systems"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email">Business Email *</label>
                  <input 
                    type="email" 
                    id="modal-email" 
                    name="email" 
                    required 
                    placeholder="vikram@nexustech.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-phone">Mobile / Direct Phone *</label>
                  <input 
                    type="tel" 
                    id="modal-phone" 
                    name="phone" 
                    required 
                    placeholder="98208XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-category">Product Category</label>
                  <select 
                    id="modal-category" 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {productCategories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-quantity">Quantity Needed</label>
                  <input 
                    type="text" 
                    id="modal-quantity" 
                    name="quantity" 
                    placeholder="e.g. 10 units"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="modal-requirement">Requirement Title / Product Models *</label>
                  <input 
                    type="text" 
                    id="modal-requirement" 
                    name="requirement" 
                    required 
                    placeholder="e.g. Bulk Logitech C920 Webcams & H390 Headsets for Mumbai office"
                    value={formData.requirement}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="modal-message">Specific Notes / Billing & Delivery instructions</label>
                  <textarea 
                    id="modal-message" 
                    name="message" 
                    rows="3" 
                    placeholder="Any technical requirements or preferred timeline..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <button className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                  <Send size={18} /> Submit Enquiry
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '0.85rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Our team will review your requirement and get back to you.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
