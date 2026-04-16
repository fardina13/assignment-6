import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
  const tagStyles = {
    orange: "bg-orange-100 text-orange-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600"
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-lg transition flex flex-col justify-between">
      <span className={`absolute top-4 right-4 text-[10px] uppercase font-bold px-2 py-1 rounded-md ${tagStyles[product.tagType]}`}>
        {product.tag}
      </span>
      
      <div>
        <img src={product.icon} alt={product.name} className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>
        
        <div className="mb-4">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="text-gray-400 text-sm">/{product.period}</span>
        </div>

        <ul className="space-y-2 mb-6 text-left">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => handleAddToCart(product)}
        className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-indigo-100"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;