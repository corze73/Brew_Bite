import React from 'react';
import { categories } from '../data/menuData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex space-x-2 overflow-x-auto">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Items
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;