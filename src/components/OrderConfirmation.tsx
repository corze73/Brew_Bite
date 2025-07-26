import React from 'react';
import { CheckCircle, Clock, MapPin } from 'lucide-react';
import { Order } from '../types';

interface OrderConfirmationProps {
  order: Order;
  onNewOrder: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ order, onNewOrder }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600">Thank you for your order. We're preparing it now.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Order ID:</span>
            <span className="text-orange-600 font-mono">{order.id}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Total:</span>
            <span className="font-bold text-lg">${order.totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Status:</span>
            <span className="text-green-600 font-semibold capitalize">{order.status}</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-gray-600">
            <Clock size={20} />
            <span>Estimated delivery: 25-35 minutes</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <MapPin size={20} />
            <span className="text-left">{order.customerInfo.address}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-3">Your Items:</h3>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onNewOrder}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Place Another Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;