import React from 'react';

import BoxImage from '../assets/navbar/box.svg';
import HomeImage from '../assets/navbar/home.svg';
import NofiImage from '../assets/navbar/nofi.svg';
import UserImage from '../assets/navbar/user.svg';
import CircleImage from '../assets/navbar/circle.svg';

const Navbar = () => {
    return (
        <div className="fixed z-10 w-full h-[90px] left-0 lg:h-[60px] lg:pt-[10px] lg:pb-0 lg:top-0 cursor-pointer xs:bottom-0 bg-white border-solid border-t-2 border-[#E2E2EA] px-[25px] pt-[20px] pb-[36px]">
            <div className="flex flex-row items-center justify-around h-[40px] p-0 gap-[55px]">
                <img src={HomeImage} alt="home" />
                <div className="relative">
                    <img src={NofiImage} alt="notification" />
                    <img
                        src={CircleImage}
                        alt="notification"
                        className="absolute top-[5px] right-[5px]"
                    />
                </div>
                <img src={BoxImage} alt="box" />
                <img src={UserImage} alt="user" />
            </div>
            <div className="absolute lg:hidden h-[5px] left-[121px] right-[120px] bottom-[8px] bg-[#D5D5DC] rounded-[100px]"></div>
        </div>
    );
};

export default Navbar;
