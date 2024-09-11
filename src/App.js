import React, { useState } from 'react';

function Card({ title, features, image }) {
  const [size, setSize] = useState(1);
  const maxScale = 3; // Maximum scale size

  const toggleLike = () => {
    if (size < maxScale) {
      setSize(size + 0.5); // Increment size by 0.5 until maxScale
    } else {
      setSize(1); // Reset to original size
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="rounded-md w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">- {feature}</li>
        ))}
      </ul>
      <button onClick={toggleLike} className="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform transform duration-200 ease-in-out`}
          style={{ transform: `scale(${size})` }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15a7 7 0 014-6.25A7 7 0 0119 9a7 7 0 01-7 7H5z"
          />
        </svg>
      </button>
    </div>
  );
}

function App() {
  const products = [
    {
      title: 'Organic Apples',
      features: ['Fresh', 'Locally Grown', 'No Pesticides'],
      image: 'src/assets/images/tomatoes.jpeg',
    },
    {
      title: 'Free-Range Eggs',
      features: ['Healthy', 'Rich in Nutrients', 'Farm Fresh'],
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Fresh Tomatoes',
      features: ['Juicy', 'High Vitamin C', 'Locally Grown'],
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agricultural Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            features={product.features}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
