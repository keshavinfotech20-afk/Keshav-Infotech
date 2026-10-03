import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { companyData } from './companyData';

export const LegalModals = ({ modalType, onClose }) => {
  if (!modalType) return null;

  const isPrivacy = modalType === 'privacy';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {isPrivacy ? <ShieldCheck size={22} style={{ color: 'var(--brand-blue)' }} /> : <FileText size={22} style={{ color: 'var(--brand-blue)' }} />}
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', margin: 0 }}>
              {isPrivacy ? 'Privacy Policy' : 'Terms & Commercial Conditions'}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
          {isPrivacy ? (
            <div>
              <p><strong>Keshav Infotech Privacy Statement</strong></p>
              <p>
                At Keshav Infotech, accessible from 91 Mapla House, Modi Street, Fort, Mumbai – 400001, we respect the privacy of our business clients, corporate buyers, and website visitors.
              </p>
              <h4 style={{ color: 'var(--primary-navy)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>1. Business Information Collection</h4>
              <p>
                We collect business contact information submitted through our quotation forms, WhatsApp inquiries, or email correspondence (such as Company Name, Contact Name, Business Email, Mobile Number, and Product Procurement Details) solely to evaluate and process commercial IT quotes.
              </p>
              <h4 style={{ color: 'var(--primary-navy)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>2. Data Usage & Confidentiality</h4>
              <p>
                Your business contact details will strictly be used to provide requested product pricing, specification guidance, and order support. We do not sell or rent commercial contact data to third-party marketing agencies.
              </p>
              <h4 style={{ color: 'var(--primary-navy)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3. Contact & Inquiries</h4>
              <p>
                For any privacy questions or data updates, please reach out directly to our team at <a href={`mailto:${companyData.email}`}>{companyData.email}</a>.
              </p>
            </div>
          ) : (
            <div>
              <p><strong>Keshav Infotech Commercial Terms</strong></p>
              <p>
                Welcome to Keshav Infotech. By requesting quotes or engaging in B2B procurement with us, you agree to the following business principles:
              </p>
              <h4 style={{ color: 'var(--primary-navy)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>1. B2B Quotation Basis</h4>
              <p>
                All quotations issued by Keshav Infotech are custom commercial quotes tailored to product model availability, order quantity, and prevailing brand vendor pricing in India.
              </p>
              <h4 style={{ color: 'var(--primary-navy)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>2. Genuine Product Warranties</h4>
              <p>
                All hardware products supplied by Keshav Infotech carry standard manufacturer warranties as provided by the respective brand vendors in India.
              </p>
              <h4 style={{ color: 'var(--primary-navy)', marginTop: '1.25rem', marginBottom: '0.5rem' }}>3. Procurement Inquiries</h4>
              <p>
                For formal corporate purchase orders or inquiries, please contact our Fort, Mumbai commercial team at 9820804507.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
