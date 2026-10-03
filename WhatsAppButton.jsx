import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData } from './companyData';

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(companyData.whatsappDefaultMsg)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat with Keshav Infotech team on WhatsApp"
      title="Need an IT product or quote? Chat with our team on WhatsApp."
    >
      <MessageSquare size={22} />
      <span>Chat with our team on WhatsApp</span>
    </a>
  );
};
