export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'beverages' | 'food' | 'pastries';
  isPopular?: boolean;
  isVegetarian?: boolean;
}

export const menuItems: MenuItem[] = [
  // Beverages
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich, bold shot of premium coffee beans',
    price: 3.50,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'beverages',
    isPopular: true
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and foam',
    price: 4.75,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'beverages',
    isPopular: true
  },
  {
    id: 'latte',
    name: 'Cafe Latte',
    description: 'Smooth espresso with steamed milk and light foam',
    price: 5.25,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'beverages'
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Smooth, refreshing cold-brewed coffee served over ice',
    price: 4.25,
    image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'beverages'
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha with steamed milk',
    price: 5.75,
    image: 'https://images.pexels.com/photos/28730007/pexels-photo-28730007.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'beverages',
    isVegetarian: true
  },

  // Food
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Fresh avocado on artisan bread with tomatoes and herbs',
    price: 8.50,
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'grilled-sandwich',
    name: 'Grilled Club Sandwich',
    description: 'Turkey, bacon, lettuce, tomato on toasted sourdough',
    price: 11.75,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    isPopular: true
  },
  {
    id: 'quinoa-bowl',
    name: 'Mediterranean Quinoa Bowl',
    description: 'Quinoa, roasted vegetables, feta, and tahini dressing',
    price: 12.25,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    isVegetarian: true
  },
  {
    id: 'soup-day',
    name: 'Soup of the Day',
    description: 'Chef\'s daily selection served with artisan bread',
    price: 7.95,
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food'
  },

  // Pastries
  {
    id: 'croissant',
    name: 'Butter Croissant',
    description: 'Flaky, buttery French pastry baked fresh daily',
    price: 3.25,
    image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pastries',
    isVegetarian: true
  },
  {
    id: 'blueberry-muffin',
    name: 'Blueberry Muffin',
    description: 'Made with fresh blueberries and a hint of lemon',
    price: 4.50,
    image: 'https://images.pexels.com/photos/7935286/pexels-photo-7935286.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pastries',
    isVegetarian: true,
    isPopular: true
  },
  {
    id: 'danish',
    name: 'Fruit Danish',
    description: 'Flaky pastry filled with seasonal fruit and cream cheese',
    price: 4.75,
    image: 'https://images.pexels.com/photos/792406/pexels-photo-792406.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pastries',
    isVegetarian: true
  },
  {
    id: 'scone',
    name: 'Scones',
    description: 'Tender scone with dried cranberries and orange zest',
    price: 3.95,
    image: 'https://images.pexels.com/photos/8954801/pexels-photo-8954801.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pastries',
    isVegetarian: true
  }
];

export const categories = [
  { id: 'beverages', name: 'Beverages', icon: '☕' },
  { id: 'food', name: 'Food', icon: '🍽️' },
  { id: 'pastries', name: 'Pastries', icon: '🥐' }
];