import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { companyData } from './companyData';
import { productCategories } from './productsData';

export const ContactSection = ({ prefilledProduct }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    category: prefilledProduct ? prefilledProduct.category : 'all',
    requirement: prefilledProduct ? `Quote for model: ${prefilledProduct.name} (${prefilledProduct.model})` : '',
    quantity: '1',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Based in Fort, Mumbai</span>
          <h1 className="section-title">Contact & Request a B2B Quotation</h1>
          <p className="section-desc">
            Connect with our IT specialists to submit company procurement requirements or arrange product pricing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left Column: Office Info & Contacts */}
          <div>
            <div 
              style={{ 
                backgroundColor: 'var(--bg-surface)', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: '16px', 
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
                Keshav Infotech Office
              </h3>

              <div className="footer-contact-item" style={{ color: 'var(--text-body)', marginBottom: '1.25rem' }}>
                <MapPin size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--primary-navy)' }}>Office Address:</strong><br />
                  91 Mapla House, Modi Street,<br />
                  Fort, Mumbai – 400001
                </div>
              </div>

              <div className="footer-contact-item" style={{ color: 'var(--text-body)', marginBottom: '1.25rem' }}>
                <Phone size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--primary-navy)' }}>Direct Key Contact:</strong><br />
                  Ashok Chaudhari: <a href="tel:9820804507" style={{ fontWeight: 600 }}>9820804507</a>
                </div>
              </div>

              <div className="footer-contact-item" style={{ color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                <Mail size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--primary-navy)' }}>Email Enquiry:</strong><br />
                  <a href={`mailto:${companyData.email}`} style={{ fontWeight: 600 }}>{companyData.email}</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a 
                  href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div 
              style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid var(--border-subtle)', 
                height: '280px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <iframe 
                title="Keshav Infotech Location Map - Fort Mumbai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.91386128456!2d72.8335!3d18.9345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c5d6e2e001%3A0x8e8a6f443b35520!2sModi%20St%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: B2B Quote Enquiry Form */}
          <div 
            style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: '16px', 
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              Request a B2B Quotation
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
              Please fill out your business requirement details. Our team will review your requirement and get back to you.
            </p>

            {formSubmitted ? (
              <div 
                style={{ 
                  textAlign: 'center', 
                  padding: '3rem 1.5rem', 
                  background: 'var(--light-sky-bg)', 
                  borderRadius: '12px',
                  border: '1px solid rgba(2, 132, 199, 0.2)'
                }}
              >
                <CheckCircle2 size={48} style={{ color: 'var(--brand-blue)', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                  Enquiry Submitted Successfully!
                </h4>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our team will review your requirement and get back to you.
                </p>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setFormSubmitted(false)}
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyName">Company / Organization Name *</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName" 
                      required 
                      placeholder="e.g. Apex Enterprises Pvt Ltd"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Business Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="98200XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Product Category</label>
                    <select 
                      id="category" 
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      {productCategories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">Quantity Required</label>
                    <input 
                      type="text" 
                      id="quantity" 
                      name="quantity" 
                      placeholder="e.g. 5 units / 50 units"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="requirement">Product Model / Requirement Title *</label>
                    <input 
                      type="text" 
                      id="requirement" 
                      name="requirement" 
                      required
                      placeholder="e.g. Logitech Wireless Keyboard Combo MK270 & TP-Link 24-Port Switch"
                      value={formData.requirement}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Additional Specifications / Office Delivery Notes</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      placeholder="Please specify any technical constraints, delivery location preferences, or invoice requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div style={{ marginTop: '1.75rem' }}>
                  <button className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                    <Send size={18} /> Submit B2B Enquiry
                  </button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Our team will review your requirement and get back to you.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
