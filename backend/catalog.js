const products = [
  { id: 1, productImage: '/images/product-3.png', productName: 'Lounge Chair', productPrice: 100, pQuantity: 1 },
  { id: 2, productImage: '/images/product-1.png', productName: 'Nordic Chair', productPrice: 50, pQuantity: 1 },
  { id: 3, productImage: '/images/product-2.png', productName: 'Kruzo Aero Chair', productPrice: 78, pQuantity: 1 },
  { id: 4, productImage: '/images/product-3.png', productName: 'Ergonomic Chair', productPrice: 43, pQuantity: 1 },
  { id: 5, productImage: '/images/product-3.png', productName: 'Nordic Chair', productPrice: 50, pQuantity: 1 },
  { id: 6, productImage: '/images/product-1.png', productName: 'Nordic Chair', productPrice: 50, pQuantity: 1 },
  { id: 7, productImage: '/images/product-2.png', productName: 'Kruzo Aero Chair', productPrice: 78, pQuantity: 1 },
  { id: 8, productImage: '/images/product-3.png', productName: 'Ergonomic Chair', productPrice: 43, pQuantity: 1 },
];
const teams = ['Lawson Arnold', 'Jeremy Walker', 'Patrik White', 'Kathryn Ryan'].map((name, index) => ({
  image: `/images/person_${index + 1}.jpg`, name, postion: 'Design Team',
  description: 'Sample team profile from the Furni design template.', more: 'Learn More',
}));
module.exports = { products, teams };
