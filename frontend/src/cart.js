import { useEffect, useState } from 'react';

export function readCart() {
  try {
    const items = JSON.parse(localStorage.getItem('cartData') || '[]');
    return Array.isArray(items) ? items.filter(item =>
      Number.isInteger(item.id) && Number.isFinite(item.productPrice) &&
      Number.isInteger(item.pQuantity) && item.pQuantity > 0 && item.pQuantity <= 99
    ) : [];
  } catch {
    return [];
  }
}

export function writeCart(items) {
  localStorage.setItem('cartData', JSON.stringify(items));
  window.dispatchEvent(new Event('cart-updated'));
}

export function useCart() {
  const [items, setItems] = useState(readCart);
  useEffect(() => {
    const refresh = () => setItems(readCart());
    window.addEventListener('cart-updated', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('cart-updated', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);
  return items;
}

export const cartTotal = items => items.reduce((sum, item) => sum + item.productPrice * item.pQuantity, 0);
