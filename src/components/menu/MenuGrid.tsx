import React from 'react';
import { FoodCard } from './FoodCard';
import type { MenuItem } from '@/types';

const SAMPLE_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80',
    category: 'Pizza',
    dietary: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
    },
    rating: 4.5,
    preparationTime: 20,
  },
  {
    id: '2',
    name: 'Classic Burger',
    description: 'Angus beef patty with lettuce, tomato, cheese, and special sauce',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80',
    category: 'Burgers',
    dietary: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
    },
    rating: 4.8,
    preparationTime: 15,
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80',
    category: 'Salads',
    dietary: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
    },
    rating: 4.3,
    preparationTime: 10,
  },
];

export function MenuGrid() {
  const handleAddToCart = (item: MenuItem) => {
    console.log('Added to cart:', item);
    // TODO: Implement cart functionality
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {SAMPLE_ITEMS.map((item) => (
        <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}