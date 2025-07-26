import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemCount, 
  onCartClick, 
  onSearchChange, 
  searchQuery 
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">B&B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-800">Brew & Bite</h1>
              <p className="text-sm text-gray-600">Cafe Delivery</p>
            </div>
          </div>
          
          <button
            onClick={onCartClick}
            className="relative bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;