import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { categories } from '../data/mockData';
import './KidsCategoryPage.css';

export const KidsCategoryPage = () => {
  const { kidsGender } = useParams();
  const navigate = useNavigate();

  const kidsCategories = categories.kids || [];

  return (
    <div className="kids-category-page">
      <div className="page-header">
        <Button variant="ghost" onClick={() => navigate('/category/kids')} className="back-btn">
          <ArrowLeft size={20} /> Back
        </Button>
        <h1 className="page-title">
          {kidsGender === 'boy' ? "Boys' Collection" : "Girls' Collection"}
        </h1>
        <p className="page-subtitle">Choose a category to view available styles</p>
      </div>

      <section className="categories-section">
        <div className="categories-grid">
          {kidsCategories.map(category => (
            <Card 
              key={category.id} 
              className="category-card"
              onClick={() => navigate(`/products/kids/${category.id}/${kidsGender}`)}
            >
              <CardContent className="category-card-content">
                {category.icon && <div className="category-icon">{category.icon}</div>}
                <h3 className="category-name">{category.name}</h3>
                <Button variant="ghost" className="view-btn">
                  View Collection <ChevronRight size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};