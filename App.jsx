import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { WhyChooseUs } from './WhyChooseUs';
import { BrandsGrid } from './BrandsGrid';
import { SolutionsSection } from './SolutionsSection';
import { IndustriesSection } from './IndustriesSection';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { Catalogue } from './Catalogue';
import { ProductModal } from './ProductModal';
import { QuoteModal } from './QuoteModal';
import { WhatsAppButton } from './WhatsAppButton';
import { Footer } from './Footer';
import { LegalModals } from './LegalModals';
import { ArrowRight, Send, PhoneCall } from 'lucide-react';

export function App() {
  // Navigation Routing State
  const [currentRoute, setCurrentRoute] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal Dialog States
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  // SEO Page Titles & Hash Sync
  useEffect(() => {
    const titlesMap = {
      home: "Keshav Infotech | IT Hardware, Software & Technology Solutions – Mumbai",
      products: "Product Catalogue | Keshav Infotech – IT Hardware & Peripherals",
      solutions: "Corporate IT Solutions & Technology Supply | Keshav Infotech",
      brands: "Leading IT Brands Portfolio | Keshav Infotech Fort Mumbai",
      about: "About Us | Keshav Infotech – IT Partner in Fort, Mumbai",
      industries: "Technology Supply for Modern Businesses | Keshav Infotech",
      contact: "Contact & Request a B2B Quote | Keshav Infotech Fort Mumbai"
    };

    document.title = titlesMap[currentRoute] || titlesMap.home;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  // Routing Handler
  const navigateTo = (route, category = 'all') => {
    setCurrentRoute(route);
    if (category) {
      setSelectedCategory(category);
    }
  };

  // Open Quote Modal
  const handleOpenQuoteModal = (product = null) => {
    setQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Navigation Header */}
      <Header 
        currentRoute={currentRoute} 
        navigateTo={navigateTo} 
        onRequestQuote={() => handleOpenQuoteModal(null)} 
      />

      {/* Main Page Routing Views */}
      <main style={{ flexGrow: 1 }}>
        {/* HOMEPAGE VIEW */}
        {currentRoute === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero 
              onRequestQuote={() => handleOpenQuoteModal(null)} 
              onExploreProducts={() => navigateTo('products')}
              onContactUs={() => navigateTo('contact')}
            />

            {/* 4. Why Businesses Choose Keshav Infotech */}
            <WhyChooseUs />

            {/* 5. Featured Brands Grid */}
            <BrandsGrid 
              onSelectBrand={(brandName) => navigateTo('products')} 
            />

            {/* 6. Corporate IT Solutions Overview */}
            <SolutionsSection 
              onRequestQuote={() => handleOpenQuoteModal(null)} 
            />

            {/* 7. Product Catalogue Spotlight Preview */}
            <Catalogue 
              selectedCategory={selectedCategory}
              onSelectCategory={(catId) => setSelectedCategory(catId)}
              onRequestQuoteForProduct={(product) => handleOpenQuoteModal(product)}
              onViewProductDetail={(product) => setDetailProduct(product)}
              onContactUs={() => navigateTo('contact')}
            />

            {/* 8. About & Company Background Summary */}
            <AboutSection 
              onRequestQuote={() => handleOpenQuoteModal(null)} 
            />

            {/* 9. Corporate Industries & Use Cases */}
            <IndustriesSection 
              onRequestQuote={() => handleOpenQuoteModal(null)} 
            />

            {/* 10. Request a Quote CTA Banner */}
            <section style={{ backgroundColor: 'var(--primary-navy)', padding: '5rem 0', color: '#FFFFFF', textAlign: 'center' }}>
              <div className="container">
                <span style={{ color: 'var(--sky-blue)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', display: 'block' }}>
                  Streamlined Corporate Procurement
                </span>
                <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
                  Ready to Source IT Products for Your Company?
                </h2>
                <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto 2rem' }}>
                  Connect with our Fort, Mumbai commercial team for fast, transparent B2B quotations on leading hardware, networking, storage, and office technology.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary btn-lg" onClick={() => handleOpenQuoteModal(null)}>
                    <Send size={18} /> Request a B2B Quote
                  </button>
                  <a href="tel:9820804507" className="btn btn-outline-white btn-lg">
                    <PhoneCall size={18} /> Call 9820804507
                  </a>
                </div>
              </div>
            </section>

            {/* 11. Contact & Map Location Section */}
            <ContactSection prefilledProduct={quoteProduct} />
          </>
        )}

        {/* PRODUCTS CATALOGUE PAGE VIEW */}
        {currentRoute === 'products' && (
          <Catalogue 
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => setSelectedCategory(catId)}
            onRequestQuoteForProduct={(product) => handleOpenQuoteModal(product)}
            onViewProductDetail={(product) => setDetailProduct(product)}
            onContactUs={() => navigateTo('contact')}
          />
        )}

        {/* SOLUTIONS & SERVICES PAGE VIEW */}
        {currentRoute === 'solutions' && (
          <SolutionsSection 
            onRequestQuote={() => handleOpenQuoteModal(null)} 
          />
        )}

        {/* BRANDS SHOWCASE PAGE VIEW */}
        {currentRoute === 'brands' && (
          <BrandsGrid 
            onSelectBrand={(brandName) => navigateTo('products')} 
          />
        )}

        {/* ABOUT US PAGE VIEW */}
        {currentRoute === 'about' && (
          <AboutSection 
            onRequestQuote={() => handleOpenQuoteModal(null)} 
          />
        )}

        {/* INDUSTRIES & CORPORATE USE CASES PAGE VIEW */}
        {currentRoute === 'industries' && (
          <IndustriesSection 
            onRequestQuote={() => handleOpenQuoteModal(null)} 
          />
        )}

        {/* CONTACT US PAGE VIEW */}
        {currentRoute === 'contact' && (
          <ContactSection prefilledProduct={quoteProduct} />
        )}
      </main>

      {/* Floating WhatsApp CTA Widget */}
      <WhatsAppButton />

      {/* Global Footer */}
      <Footer 
        navigateTo={navigateTo} 
        onOpenLegal={(type) => setLegalModalType(type)} 
      />

      {/* Product Detail Modal */}
      <ProductModal 
        product={detailProduct} 
        onClose={() => setDetailProduct(null)} 
        onRequestQuoteForProduct={(product) => handleOpenQuoteModal(product)}
      />

      {/* B2B Quote Modal Drawer */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => { setIsQuoteModalOpen(false); setQuoteProduct(null); }} 
        selectedProduct={quoteProduct}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModals 
        modalType={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
}

export default App;
