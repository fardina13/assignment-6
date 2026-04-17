import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({cartCount}) => {
    return (
        <div>
            <nav className="flex items-center justify-between px-10 py-5">
             <div className="text-2xl font-bold text-purple-600">DigiTools</div>
             <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#">Products</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
            <div className="relative">

  <button className="text-gray-600 hover:text-purple-600 transition-colors">
    <ShoppingCart size={25} />
  </button>

  
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
      {cartCount}
    </span>
  )}
</div>
          <button className="text-gray-700">Login</button>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold">
            Get Started
          </button>
        </div>
            </nav>
        </div>
    );
};

export default Navbar;