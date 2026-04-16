import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl mb-3">
      <div className="flex items-center gap-4">
        <img src={item.icon} alt="" className="w-10 h-10" />
        <div className="text-left">
          <h4 className="font-bold text-gray-800">{item.name}</h4>
          <p className="text-sm text-gray-500">${item.price}</p>
        </div>
      </div>
      <button 
        onClick={onRemove}
        className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-lg text-sm transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;