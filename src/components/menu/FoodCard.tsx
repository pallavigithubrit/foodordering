import React from 'react';
import { Star, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import type { MenuItem } from '@/types';

interface FoodCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export function FoodCard({ item, onAddToCart }: FoodCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.dietary.vegetarian && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Vegetarian
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.name}
          </h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
              {item.rating}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            {formatPrice(item.price)}
          </span>
          <Button
            onClick={() => onAddToCart(item)}
            size="sm"
            className="group"
          >
            Add to Cart
            <Plus className="ml-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}