import React, { useState, useMemo } from 'react';
import { Search, Filter, Send, Eye, PhoneCall, Shield, RefreshCw } from 'lucide-react';
import { productCategories, productsData } from './productsData';
import { brandsData } from './brandsData';

export const Catalogue = ({ 
  selectedCategory, 
  onSelectCategory, 
  onRequestQuoteForProduct, 
  onViewProductDetail,
  onContactUs 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');

  // Extract unique brands present in product dataset
  const uniqueBrands = useMemo(() => {
    const brandsSet = new Set(productsData.map(p => p.brand));
    return Array.from(brandsSet).sort();
  }, []);

  // Filter products based on search, category, and brand
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.model.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.specs.some(s => s.toLowerCase().includes(query));

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <div className="catalogue-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-subtitle">Corporate IT Procurement Portal</span>
          <h1 className="section-title">Product Portfolio & Catalogue</h1>
          <p className="section-desc">
            Explore genuine enterprise hardware, peripherals, networking, storage, power, printing, and CCTV equipment. Request custom corporate quotations for single or bulk company purchases.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="catalogue-toolbar">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
            <div className="search-box" style={{ margin: 0 }}>
              <Search className="search-icon-svg" size={20} />
              <input 
                type="text" 
                placeholder="Search products by model, brand, or specification (e.g. Logitech, TP-Link, CAT6, NVMe, UPS)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '0.9rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  backgroundColor: '#F8FAFC',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: '#0F172A',
                  cursor: 'pointer'
                }}
              >
                <option value="all">Filter by Brand (All Brands)</option>
                {uniqueBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills">
            {productCategories.map(cat => (
              <button
                key={cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter Bar */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justify: 'space-between', 
            marginBottom: '1.75rem',
            padding: '0 0.5rem'
          }}
        >
          <span style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 600 }}>
            Showing <strong style={{ color: '#0F172A' }}>{filteredProducts.length}</strong> products matching your procurement requirements
          </span>

          {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => {
                onSelectCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
            >
              <RefreshCw size={14} /> Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="catalogue-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-card-header">
                  <span className="product-brand-tag">{product.brand}</span>
                  {product.isPopular && <span className="product-popular-badge">Corporate Favorite</span>}
                  
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-card-body">
                  <div className="product-model">Model: {product.model}</div>
                  <h3>{product.name}</h3>

                  <ul className="product-specs-list">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 'auto' }}>
                    <div 
                      style={{ 
                        fontSize: '0.8rem', 
                        color: '#0284C7', 
                        fontWeight: 700, 
                        marginBottom: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <Shield size={14} /> Corporate Procurement Rate
                    </div>

                    <div className="product-card-footer">
                      <button 
                        className="btn btn-secondary btn-sm" 
                        style={{ flex: 1 }}
                        onClick={() => onViewProductDetail(product)}
                      >
                        <Eye size={14} /> Quick View
                      </button>

                      <button 
                        className="btn btn-primary btn-sm" 
                        style={{ flex: 1.2 }}
                        onClick={() => onRequestQuoteForProduct(product)}
                      >
                        <Send size={14} /> Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            style={{ 
              textAlign: 'center', 
              padding: '4rem 2rem', 
              background: '#FFFFFF', 
              borderRadius: '16px',
              border: '1px solid #E2E8F0' 
            }}
          >
            <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '0.5rem' }}>
              No products found matching your search
            </h3>
            <p style={{ color: '#64748B', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              We stock an extensive range of additional IT products from leading brands in India. Please submit your exact requirement to our team.
            </p>
            <button className="btn btn-primary" onClick={onContactUs}>
              Enquire directly for Custom IT Sourcing
            </button>
          </div>
        )}

        {/* Customer Assistance Box */}
        <div 
          style={{ 
            marginTop: '4rem', 
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
            borderRadius: '16px', 
            padding: '2.5rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
              Need help selecting the right product?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '1rem', margin: 0 }}>
              Speak directly with our IT procurement specialists in Fort, Mumbai to match your technical requirements.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:9820804507" className="btn btn-primary">
              <PhoneCall size={16} /> Call 9820804507
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
