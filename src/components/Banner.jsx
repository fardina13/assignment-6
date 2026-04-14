import { Play } from 'lucide-react';
import React from 'react';
import bannerImg from '../assets/banner.png';

const Banner = () => {
    return (
        <div>
            <div className='container mx-auto my-8 flex items-center gap-15'>
                <div className='w-[700px]'>
                <p className='w-[294px] bg-[#E1E7FF] rounded-full px-[16px] py-[8px]'>New: AI-Powered Tools Available</p>
                <h2 className='font-bold text-7xl mt-4'>Supercharge Your Digital Workflow</h2>
                <p className='text-[#627382] mt-4'>Access premium AI tools, design assets, templates, and productivity <br />
                 software—all in one place. Start creating faster today. <br />
                 Explore Products</p>
                 <div className='mt-8 flex items-center gap-4'>
                    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-[16px] py-[12px] rounded-3xl text-white'>Explore Products</button>
                    <button className='flex items-center gap-2 bg-white border-1 border-[#4F39F6] px-[16px] py-[12px] rounded-3xl text-black'><Play size={20}></Play> <span>Watch Demo</span></button>
                 </div>
            </div>
            <div>
                    <img className='' src={bannerImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;