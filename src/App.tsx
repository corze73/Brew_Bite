import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import MenuGrid from './components/MenuGrid';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import { menuItems } from './data/menuData';
import { CartItem, CustomerInfo, Order } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart-items', []);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  const filteredMenuItems = useMemo(() => {
    let filtered = menuItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (menuItem: typeof menuItems[0]) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === menuItem.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, {
          id: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          quantity: 1,
          image: menuItem.image
        }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handlePlaceOrder = (customerInfo: CustomerInfo) => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = total * 0.08;
    const deliveryFee = total > 25 ? 0 : 3.99;
    const finalTotal = total + tax + deliveryFee;

    const order: Order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      customerInfo,
      totalAmount: finalTotal,
      timestamp: new Date(),
      status: 'pending'
    };

    setCurrentOrder(order);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleNewOrder = () => {
    setCurrentOrder(null);
  };

  if (currentOrder) {
    return <OrderConfirmation order={currentOrder} onNewOrder={handleNewOrder} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        <MenuGrid
          items={filteredMenuItems}
          onAddToCart={handleAddToCart}
        />
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  );
}

export default App;