import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Delicious food spread"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Delicious Food,
            <br />
            Delivered Fast
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Order from our curated selection of premium restaurants and enjoy
            restaurant-quality meals in the comfort of your home.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="group">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}