import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockProducts } from '../data/mockData';
import './ProductsPage.css';

export const ProductsPage = () => {
  const { gender, subcategory, kidsGender } = useParams();
  const navigate = useNavigate();

  // Filter products based on route params
  let filteredProducts = mockProducts.filter(product => {
    if (gender === 'kids' && kidsGender) {
      return product.gender === 'kids' && 
             product.subcategory === subcategory && 
             product.kidsGender === kidsGender;
    }
    return product.gender === gender && product.subcategory === subcategory;
  });

  // Sort by new arrivals first
  filteredProducts = filteredProducts.sort((a, b) => {
    if (a.isNewArrival && !b.isNewArrival) return -1;
    if (!a.isNewArrival && b.isNewArrival) return 1;
    return 0;
  });

  const categoryTitle = filteredProducts[0]?.category || 'Products';

  return (
    <div className="products-page">
      <div className="page-header">
        <Button 
          variant="ghost" 
          onClick={() => navigate(gender === 'kids' && kidsGender ? `/category/kids` : `/category/${gender}`)} 
          className="back-btn"
        >
          <ArrowLeft size={20} /> Back
        </Button>
        <h1 className="page-title">{categoryTitle}</h1>
        {kidsGender && <p className="page-subtitle">For {kidsGender === 'boy' ? 'Boys' : 'Girls'}</p>}
      </div>

      <section className="products-section">
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No products available in this category yet.</p>
            <p className="coming-soon">Coming Soon!</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <Card 
                key={product.id} 
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  {product.isNewArrival && (
                    <span className="new-badge">
                      <Sparkles size={12} /> fresh arrivals
                    </span>
                  )}
                </div>
                <CardContent className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-category">{product.category}</p>
                  <div className="sizes-preview">
                    {product.sizes.slice(0, 4).map(size => (
                      <span key={size} className="size-tag">{size}</span>
                    ))}
                    {product.sizes.length > 4 && (
                      <span className="size-tag more">+{product.sizes.length - 4}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};