import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import CellularImage from '../assets/hero/Cellular.svg';
import WifiImage from '../assets/hero/Wifi.svg';
import BatteryImage from '../assets/hero/Battery.svg';
import ButtonImage from '../assets/hero/button.svg';
import BGImage from '../assets/hero/bg.svg';

const HeroBanner = () => {
    return (
        <section className="px-[16px] lg:px-[32px] bg-[#171725] h-[428px] xs:mb-[300px] lg:pt-[80px]">
            <div className="flex flex-row justify-between items-center pt-[16px] lg:hidden">
                <span className="text-white">9:41</span>
                <div className="flex flex-row items-center justify-around gap-[4px]">
                    <img src={CellularImage} alt="Cellular" />
                    <img src={WifiImage} alt="Wifi" />
                    <img src={BatteryImage} alt="Battery" />
                </div>
            </div>
            <button className="mt-[27px] mb-[16px] lg:hidden">
                <img src={ButtonImage} alt="Button" />
            </button>
            <div className="text-white">
                <h3 className="text-[32px] leading-[40px] font-semibold">
                    Silver Tier
                </h3>
                <p className="text-[#B5B5BE] mt-[8px] mb-[40px] text-[16px] leading-[24px] tracking-[-0.005em] font-normal">
                    In Silver Tier, every 11 in rental fee paid, you get 2 coins
                    to redeem exclusive rewards.
                </p>
            </div>
            <div className="bg-white h-[420px] border-[1px] border-solid border-[#FAFAFB] lg:text-center rounded-[8px] shadow-herobanner relative">
                <img src={BGImage} alt="background" className="w-full h-full" />
                <div className="flex flex-col absolute w-full h-full top-0 px-6 pt-[26px] lg:pt-[0] lg:flex lg:w-full lg:items-center lg:justify-center">
                    <p className="font-semibold text-[14px] leading-[24px] text-[#B5B5BE]">
                        Available Coin balance
                    </p>
                    <h1 className="mt-[8px] mb-[33px] font-normal text-[48px] leading-[56px] tracking-[-0.5px] text-[#171725]">
                        340
                    </h1>
                    <div className="bg-[#E2E2EA] w-full h-[5px] rounded-[2.5px]">
                        <div
                            className="w-[65%] rounded-[2.5px] h-[5px] bg-[#0062FF]"
                            value="60"
                            max="100"
                        ></div>
                    </div>
                    <p className="mt-[34px] mb-[16px] font-normal leading-[24px] text-[16px] tracking-[-0.005em] text-[#92929D]">
                        You have paid rental fee for 11,200.
                        <br /> Pay more 1800 to achieve Gold Tier.
                    </p>
                    <div className="flex items-center text-[#0062FF]">
                        <a
                            className="font-normal text-[16px] leading-[24px] tracking-[-0.005em]"
                            href="/#"
                        >
                            View tier benefits
                        </a>
                        <MdOutlineKeyboardArrowRight size={'24px'} />
                    </div>
                    <button className="bg-[#171725] w-full lg:w-[20%] lg:flex lg:items-center lg:justify-center rounded-[4px] text-white leading-[24px] xs:text-[16px] md:text-[18px] font-semibold px-[50px] py-[18px] mt-[24px] mb-[16px]">
                        My Coupons
                    </button>
                    <p className="tracking-[-0.5px] font-normal text-[14px] leading-[20px] text-center text-[#B5B5BE]">
                        Updated : 02/11/2021
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
