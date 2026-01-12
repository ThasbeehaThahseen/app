import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sparkles, Shirt, Layers, Baby } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import './HomePage.css';
import { mockProducts } from '../data/mockData';

export const HomePage = () => {
  const navigate = useNavigate();

  const newArrivals = mockProducts.filter(product => product.isNewArrival).slice(0, 8);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="store-name">Milan Readymades</h1>
          <p className="store-tagline">Elegant Fashion for Every Occasion</p>
          <p className="welcome-text">
            Welcome to Milan Readymades, Vadapalani's premier destination for exquisite traditional and contemporary clothing.
            Discover our curated collection for men, women, and children.
          </p>
        </div>
      </section>

      {/* Gender Selection */}
      <section className="gender-section">
        <h2 className="section-title">Choose Your Collection</h2>
        <div className="gender-grid">
          <Card className="gender-card" onClick={() => navigate('/category/men')}>
            <CardContent className="gender-card-content">
              <div className="gender-icon">👔</div>
              <h3>Men's Collection</h3>
              <p>Traditional & Contemporary Wear</p>
              <Button variant="ghost" className="explore-btn">
                Explore <ChevronRight size={18} />
              </Button>
            </CardContent>
          </Card>

          <Card className="gender-card" onClick={() => navigate('/category/women')}>
            <CardContent className="gender-card-content">
              <div className="gender-icon">👗</div>
              <h3>Women's Collection</h3>
              <p>Sarees, Ethnic & Western Wear</p>
              <Button variant="ghost" className="explore-btn">
                Explore <ChevronRight size={18} />
              </Button>
            </CardContent>
          </Card>

          <Card className="gender-card" onClick={() => navigate('/category/kids')}>
            <CardContent className="gender-card-content">
              <div className="gender-icon">🎈</div>
              <h3>Kids Collection</h3>
              <p>Traditional, Casual & Party Wear</p>
              <Button variant="ghost" className="explore-btn">
                Explore <ChevronRight size={18} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals-section">
        <div className="section-header">
          <Sparkles className="sparkle-icon" />
          <h2 className="section-title">Fresh Arrivals</h2>
          <Sparkles className="sparkle-icon" />
        </div>
        <div className="products-grid">
          {newArrivals.map(product => (
            <Card key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.isNewArrival && (
                  <span className="new-badge">fresh arrivals</span>
                )}
              </div>
              <CardContent className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-category">{product.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="view-all-container">
          <Button onClick={() => navigate('/new-arrivals')} className="view-all-btn">
            View All New Arrivals <ChevronRight size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};