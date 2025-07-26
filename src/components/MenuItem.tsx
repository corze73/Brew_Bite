import React from 'react';
import { Plus, Star } from 'lucide-react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Star size={12} fill="currentColor" />
            <span>Popular</span>
          </div>
        )}
        {item.isVegetarian && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            🌱 Vegetarian
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-700">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;