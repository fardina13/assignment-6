import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cartheader from './components/Cartheader'
import Navbar from './components/Navbar'
import Statesection from './components/Statesection'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'

function App() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemove = (id) => {
    const remainingCart = cart.filter(item => item.id !== id);
    setCart(remainingCart);
  };
  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Statesection />
      
      <Cartheader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cart.length} 
      />

      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                handleAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md border">
            <h2 className="text-2xl font-bold mb-4">Selected Products</h2>
            {cart.length === 0 ? (
              <p className="text-gray-400 italic">No products added yet.</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <CartItem 
                    key={index} 
                    item={item} 
                    handleRemove={() => handleRemove(item.id)} 
                  />
                ))}
                   
                <div className="border-t pt-8 mt-10">
                  <div className="flex justify-end items-center gap-4 text-xl font-bold mb-6">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>

                  <div className="mt-6 border-t pt-4">
                    <button 
                      onClick={() => setCart([])} 
                      className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-3 rounded-xl font-bold"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div> {/* <--- Added missing closing div for the total/checkout container */}
              </>
            )} {/* <--- Added missing closing brace for the cart.length ternary */}
          </div>
        )} {/* <--- Added missing closing parenthesis for the activeTab ternary */}
      </main>
    </>
  );
} // <--- Added missing closing brace for the function

export default App;