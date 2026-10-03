import React from 'react';
import { 
  Keyboard, Video, Headphones, Cable, Network, 
  HardDrive, Zap, Printer, FileText, Camera, Wrench, ArrowRight 
} from 'lucide-react';
import { productCategories } from './productsData';

export const CategoriesGrid = ({ onSelectCategory }) => {
  const iconComponents = {
    Keyboard: <Keyboard size={28} />,
    Video: <Video size={28} />,
    Headphones: <Headphones size={28} />,
    Cable: <Cable size={28} />,
    Network: <Network size={28} />,
    HardDrive: <HardDrive size={28} />,
    Zap: <Zap size={28} />,
    Printer: <Printer size={28} />,
    FileText: <FileText size={28} />,
    Camera: <Camera size={28} />,
    Wrench: <Wrench size={28} />
  };

  const categoryDescriptions = {
    "peripherals": "Logitech wired/wireless keyboards, mice, & input combinations",
    "webcams-video": "HD/4K webcams, conferencing speakerphones & video solutions",
    "audio-headsets": "USB headsets, JBL headsets, Jabra speakerphones & soundbars",
    "connectivity": "USB-C multi-docking hubs, 4K HDMI cables & D-Link networking wires",
    "networking": "TP-Link switches, PoE routers, Wi-Fi APs & D-Link patch panels",
    "storage-memory": "SanDisk drives, Seagate HDDs, Samsung SSDs & Crucial RAM",
    "power-ups": "APC Smart-UPS, Belkin surge protectors & SMPS power units",
    "printers-scanners": "HP LaserJet, Epson InkTank, Canon scanners & barcode units",
    "office-equipment": "Fellowes paper shredders & GBC thermal laminators",
    "cctv-surveillance": "Hikvision IP cameras, DVRs, NVRs & WD Purple surveillance HDDs",
    "maintenance": "Thermal paste, electric air dusters, toolkits & ESD mats"
  };

  const displayCategories = productCategories.filter(c => c.id !== 'all');

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">B2B Product Portfolio</span>
          <h2 className="section-title">Explore IT Product Categories</h2>
          <p className="section-desc">
            Sourced directly from leading technology brands in India for enterprise offices, institutions, and SMEs.
          </p>
        </div>

        <div className="categories-grid">
          {displayCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="category-card-icon">
                {iconComponents[cat.icon] || <Keyboard size={28} />}
              </div>
              <h3>{cat.name}</h3>
              <p>{categoryDescriptions[cat.id] || "Genuine IT hardware products for corporate sourcing."}</p>
              
              <div className="category-card-link">
                <span>View Catalogue</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
