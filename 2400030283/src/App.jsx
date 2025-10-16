import { useState } from 'react';

// 1. Predefined Product Data (the Array)
const products = [
  { id: 1, name: 'Stapler', price: 5.00, category: 'Stationery' },
  { id: 2, name: 'Headphones', price: 99.99, category: 'Electronics' },
  { id: 3, name: 'Laptop Bag', price: 45.00, category: 'Bags' },
  { id: 4, name: 'Pen', price: 1.00, category: 'Stationery' },
  { id: 5, name: 'Webcam', price: 35.00, category: 'Electronics' },
];

// List of all categories, including 'All'
const categories = ['All', 'Stationery', 'Electronics', 'Bags'];

function App() {
  // 2. UseState to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 3. Logic to filter the products
  const filteredProducts = products.filter(product => {
    // If 'All' is selected, return true to show all products
    if (selectedCategory === 'All') {
      return true;
    }
    // Otherwise, check if the product's category matches the filter
    return product.category === selectedCategory;
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Simple Product Filter</h1>

      {/* --- Filter Buttons --- */}
      <div style={{ marginBottom: '15px' }}>
        <p>Filter By:</p>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            // Basic inline styles for active/inactive state
            style={{
              marginRight: '10px',
              padding: '8px 12px',
              border: '1px solid #333',
              backgroundColor: selectedCategory === category ? '#ccc' : 'white',
              cursor: 'pointer'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- Display the Filtered List using map() --- */}
      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc' }}>
        <h3>Available Products ({filteredProducts.length})</h3>

        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            style={{ border: '1px solid #eee', padding: '10px', marginBottom: '8px' }}
          >
            <p>
              <strong>{product.name}</strong> - ${product.price.toFixed(2)} 
              (Category: {product.category})
            </p>
          </div>
        ))}
        
        {filteredProducts.length === 0 && <p>No products found in this category.</p>}
      </div>
    </div>
  );
}

export default App;