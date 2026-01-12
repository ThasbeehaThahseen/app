import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { mockProducts } from '../data/mockData';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import './ProductDetailPage.css';

const WHATSAPP_NUMBER = '918072153196'; // Format: country code + number

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="not-found">
          <h2>Product Not Found</h2>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    setShowWhatsAppDialog(true);
  };

  const handleConfirmWhatsApp = () => {
    const message = `Hi! I'm interested in:

Product: ${product.name}
Category: ${product.category}
Available Sizes: ${product.sizes.join(', ')}

Could you please provide more details?`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppDialog(false);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="back-btn"
        >
          <ArrowLeft size={20} /> Back
        </Button>

        <div className="product-detail-grid">
          {/* Product Image */}
          <div className="product-image-section">
            <div className="main-image-wrapper">
              <img src={product.image} alt={product.name} className="main-image" />
              {product.isNewArrival && (
                <span className="new-badge">fresh arrivals</span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-category-tag">{product.category}</p>
            </div>

            {/* Available Sizes */}
            <div className="sizes-section">
              <h3 className="section-heading">Available Sizes</h3>
              <div className="sizes-grid">
                {product.sizes.map(size => (
                  <div key={size} className="size-box">
                    <Check size={16} className="check-icon" />
                    <span>{size}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <Card className="product-details-card">
              <div className="detail-row">
                <span className="detail-label">Category:</span>
                <span className="detail-value">{product.category}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Collection:</span>
                <span className="detail-value">
                  {product.gender === 'men' ? "Men's" : product.gender === 'women' ? "Women's" : "Kids'"}
                </span>
              </div>
              {product.isNewArrival && (
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value new-arrival-text">Fresh Arrival ✨</span>
                </div>
              )}
            </Card>

            {/* WhatsApp Button */}
            <Button 
              className="whatsapp-btn" 
              onClick={handleWhatsAppClick}
            >
              <MessageCircle size={20} />
              Inquire on WhatsApp
            </Button>

            <p className="inquiry-note">
              Click to send an inquiry about this product directly to our WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Confirmation Dialog */}
      <AlertDialog open={showWhatsAppDialog} onOpenChange={setShowWhatsAppDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send WhatsApp Inquiry?</AlertDialogTitle>
            <AlertDialogDescription>
              You're about to send an inquiry for <strong>{product.name}</strong> to Milan Readymades on WhatsApp.
              <br /><br />
              The message will include:
              <ul className="whatsapp-message-preview">
                <li>Product Name: {product.name}</li>
                <li>Category: {product.category}</li>
                <li>Available Sizes: {product.sizes.join(', ')}</li>
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmWhatsApp}>
              Confirm & Send
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};