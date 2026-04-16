import React from 'react';

const Cartheader = ({activeTab, setActiveTab, cartCount}) => {

     const activeButtonClass = "bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-[16px] py-[12px] rounded-3xl text-white shadow-lg";
  const inactiveButtonClass = "bg-gray-200 text-gray-600";
  const commonButtonClass = "px-10 py-3 rounded-full font-bold transition-all duration-300";

    return (
        <div>
            <div className='container mx-auto mt-30 justify-center text-center'>
                <h2 className='font-semibold text-5xl'>Premium Digital Tools</h2>
                <p className='mt-4 text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='mt-8 gap-8'>
                    <button onClick={() => setActiveTab('products')} className={`${commonButtonClass} ${activeTab === 'products' ? activeButtonClass : inactiveButtonClass
           }`}>Products</button>
                    <button onClick={() => setActiveTab('cart')} className={`${commonButtonClass} ${activeTab === 'cart' ? activeButtonClass : inactiveButtonClass
           }`}>Cart({cartCount})</button>
                </div>
           </div>
        </div>
    );
};

export default Cartheader;