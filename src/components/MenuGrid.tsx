import React from 'react';
import MenuItem from './MenuItem';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuGridProps {
  items: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, onAddToCart }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No menu items found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default MenuGrid;