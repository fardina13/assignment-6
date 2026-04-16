import React from 'react';
import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';
const Stepsection = () => {
    return (
        <div>
            <div className='container mx-auto mt-40 justify-center text-center'>
                <h2 className='font-semibold text-5xl'>Get Started in 3 Steps</h2>
                <p className='mt-4 text-[#627382] text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
                <div className='flex mt-20 mb-30 justify-center items-center gap-x-7 mx-auto' >
                    <div className='relative px-8 py-28 rounded-md shadow-xl'>
                    <div class="absolute top-15 left-0.5 ml-70 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                    <span class="text-[14px] font-semibold text-white">01</span>
                    </div>
                    <div className='items-center text-center justify-center'>
                        <img className='mx-auto' src={userImg} alt="" />
                        <h2 className='font-bold text-[24px] pt-4'>Create Account</h2>
                        <p className='text-[#627382] pt-4'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>
                <div className='relative px-8 py-28 rounded-md shadow-xl'>
                    <div class="absolute top-15 left-0.5 ml-70 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                    <span class="text-[14px] font-semibold text-white">02</span>
                    </div>
                    <div className='items-center text-center justify-center'>
                        <img className='mx-auto' src={packageImg} alt="" />
                        <h2 className='font-bold text-[24px] pt-4'>Choose Products</h2>
                        <p className='text-[#627382] pt-4'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                </div>
                <div className='relative px-8 py-28 rounded-md shadow-xl'>
                    <div class="absolute top-15 left-0.5 ml-70 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                    <span class="text-[14px] font-semibold text-white">03</span>
                    </div>
                    <div className='items-center text-center justify-center'>
                        <img className='mx-auto' src={rocketImg} alt="" />
                        <h2 className='font-bold text-[24px] pt-4'>Start Creating</h2>
                        <p className='text-[#627382] pt-4'>Download and start using your premium <br />tools immediately.</p>
                    </div>
                </div>
                </div>        
            </div>
        </div>
    );
};

export default Stepsection;